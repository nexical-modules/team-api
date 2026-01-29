import { describe, it, expect, beforeEach } from "vitest";
import { ApiClient } from "@tests/integration/lib/client";
import { Factory } from "@tests/integration/lib/factory";
import { TestServer } from "@tests/integration/lib/server";
import { db } from "@/lib/core/db";
import crypto from "node:crypto";

describe("Team API Key - Authorization", () => {
    let client: ApiClient;

    beforeEach(async () => {
        client = new ApiClient(TestServer.getUrl());
    });

    it("should authorize a request using a valid Team API Key", async () => {
        // Create a team and a key
        const team = await Factory.create("team");
        const rawKey = `sk_team_test_${Date.now()}`;
        const hashedKey = crypto.createHash("sha256").update(rawKey).digest("hex");

        await db.teamApiKey.create({
            data: {
                teamId: team.id,
                name: "Test Key",
                hashedKey: hashedKey,
                prefix: "sk_team_",
            }
        });

        // Use the token
        client.useToken(rawKey);

        // Try to access the team itself (which requires team-member role)
        const res = await client.get(`/api/team/${team.id}`);

        expect(res.status).toBe(200);
        expect(res.body.id).toBe(team.id);
    });

    it("should fail with an invalid Team API Key", async () => {
        client.useToken("sk_team_invalid");
        const team = await Factory.create("team");
        const res = await client.get(`/api/team/${team.id}`);

        expect(res.status).toBeGreaterThanOrEqual(400);
    });

    it("should fail with a key missing the required prefix", async () => {
        const rawKey = `wrong_prefix_${Date.now()}`;
        client.useToken(rawKey);
        const team = await Factory.create("team");
        const res = await client.get(`/api/team/${team.id}`);

        expect(res.status).toBeGreaterThanOrEqual(400);
    });
});
