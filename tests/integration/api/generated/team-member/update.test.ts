// GENERATED CODE - DO NOT MODIFY
import { describe, it, expect, beforeEach } from "vitest";
import { ApiClient } from "@tests/integration/lib/client";
import { Factory } from "@tests/integration/lib/factory";
import { TestServer } from "@tests/integration/lib/server";
import { db } from "@/lib/core/db";

const _test = describe("TeamMember API - Update", () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // PUT /api/team-member/[id]
  describe("PUT /api/team-member/[id]", () => {
    it("should update teamMember", async () => {
      const actor = await client.as("team", { name: "Owner Team" });

      const user_0 = await Factory.create("user", {});
      const target = await Factory.create("teamMember", {
        ...{},
        team: { connect: { id: actor.id } },
        user: { connect: { id: user_0.id } },
      });

      const updatePayload = {};

      const res = await client.put(
        `/api/team-member/${target.id}`,
        updatePayload,
      );

      expect(res.status).toBe(200);

      const updated = await Factory.prisma.teamMember.findUnique({
        where: { id: target.id },
      });
    });
  });
});
