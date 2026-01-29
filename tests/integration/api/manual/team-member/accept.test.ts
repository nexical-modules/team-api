import { describe, it, expect, beforeEach } from "vitest";
import { ApiClient } from "@tests/integration/lib/client";
import { Factory } from "@tests/integration/lib/factory";
import { TestServer } from "@tests/integration/lib/server";
import { db } from "@/lib/core/db";

describe("TeamMember Action - Accept Invitation", () => {
    let client: ApiClient;

    beforeEach(async () => {
        client = new ApiClient(TestServer.getUrl());
    });

    it("should allow a user to accept a valid invitation", async () => {
        const inviter = await Factory.create("user");
        const team = await Factory.create("team");

        // Target user
        const targetUser = await Factory.create("user");
        const token = `token_${Date.now()}`;

        await db.invitation.create({
            data: {
                email: targetUser.email,
                teamId: team.id,
                inviterId: inviter.id,
                token: token,
                teamRole: "MEMBER",
                expires: new Date(Date.now() + 1000 * 60 * 60), // 1 hour
            }
        });

        // Login as target user
        await client.as("user", { id: targetUser.id });

        const res = await client.post("/api/team-member/invitations/accept", {
            token: token,
        });

        expect(res.status).toBe(200);
        expect(res.body.userId).toBe(targetUser.id);

        // Verify membership in DB
        const membership = await db.teamMember.findUnique({
            where: {
                userId_teamId: { userId: targetUser.id, teamId: team.id },
            },
        });
        expect(membership).toBeDefined();
        expect(membership?.role).toBe("MEMBER");

        // Verify invitation is deleted
        const invite = await db.invitation.findUnique({
            where: { token },
        });
        expect(invite).toBeNull();
    });

    it("should return error for invalid token", async () => {
        await client.as("user");
        const res = await client.post("/api/team-member/invitations/accept", {
            token: "invalid-token",
        });

        expect(res.status).toBe(400);
        expect(res.body.error).toContain("not_found");
    });

    it("should return error for email mismatch", async () => {
        const inviter = await Factory.create("user");
        const team = await Factory.create("team");
        const token = `token_mismatch_${Date.now()}`;

        await db.invitation.create({
            data: {
                email: "invited@example.com",
                teamId: team.id,
                inviterId: inviter.id,
                token: token,
                teamRole: "MEMBER",
                expires: new Date(Date.now() + 1000 * 60 * 60),
            }
        });

        // Login as WRONG user
        await client.as("user", { email: "wrong@example.com" });

        const res = await client.post("/api/team-member/invitations/accept", {
            token: token,
        });

        expect(res.status).toBe(400);
        expect(res.body.error).toContain("email_mismatch");
    });
});
