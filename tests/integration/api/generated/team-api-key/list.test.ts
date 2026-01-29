// GENERATED CODE - DO NOT MODIFY
import { describe, it, expect, beforeEach } from "vitest";
import { ApiClient } from "@tests/integration/lib/client";
import { Factory } from "@tests/integration/lib/factory";
import { TestServer } from "@tests/integration/lib/server";

const _test = describe("TeamApiKey API - List", () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // GET /api/team-api-key
  describe("GET /api/team-api-key", () => {
    const baseData = {
      name: "name_test",
      hashedKey: "hashedKey_test",
      prefix: "prefix_test",
    };

    it("should allow team-owner to list teamApiKeys", async () => {
      const actor = await client.as("team", { name: "Owner Team" });

      // Cleanup first to ensure clean state
      await Factory.prisma.teamApiKey.deleteMany({
        where: { teamId: { not: actor.id } },
      });

      // Seed data
      const suffix = Date.now();
      await Factory.create("teamApiKey", {
        ...baseData,
        hashedKey: "list_1_" + suffix + "",
        team: { connect: { id: actor.id } },
      });
      await Factory.create("teamApiKey", {
        ...baseData,
        hashedKey: "list_2_" + suffix + "",
        team: { connect: { id: actor.id } },
      });

      const res = await client.get("/api/team-api-key");

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data.length).toBeGreaterThanOrEqual(2);
      expect(res.body.meta).toBeDefined();
    });

    it("should verify pagination metadata", async () => {
      const actor = await client.as("team", { name: "Owner Team" });

      // Cleanup and seed specific count
      await Factory.prisma.teamApiKey.deleteMany({
        where: { teamId: { not: actor.id } },
      });

      const suffix = Date.now();
      const createdIds: string[] = [];
      const totalTarget = 15;
      let currentCount = 0;
      currentCount = await Factory.prisma.teamApiKey.count({
        where: { teamId: actor.id },
      });

      const toCreate = totalTarget - currentCount;

      for (let i = 0; i < toCreate; i++) {
        const rec = await Factory.create("teamApiKey", {
          ...baseData,
          hashedKey: `page_${i}_${suffix}`,
          team: { connect: { id: actor.id } },
        });
        createdIds.push(rec.id);
      }

      // Page 1
      const res1 = await client.get("/api/team-api-key?take=5&skip=0");
      expect(res1.status).toBe(200);
      expect(res1.body.data.length).toBe(5);
      expect(res1.body.meta.total).toBe(15);

      // Page 2
      const res2 = await client.get("/api/team-api-key?take=5&skip=5");
      expect(res2.status).toBe(200);
      expect(res2.body.data.length).toBe(5);
      expect(res2.body.data[0].id).not.toBe(res1.body.data[0].id);
    });

    it("should filter by name", async () => {
      // Wait to avoid collisions
      await new Promise((r) => setTimeout(r, 10));
      // Reuse getActorStatement to ensure correct actor context
      const actor = await client.as("team", { name: "Owner Team" });

      const val1 = "name_" + Date.now() + "_A";
      await new Promise((r) => setTimeout(r, 10));
      const val2 = "name_" + Date.now() + "_B";

      const relationSnippet = ", team: { connect: { id: actor.id } }"
        .replace(/^, /, "")
        .replace(/actor.id/g, "actor.id");
      const data1 = {
        ...baseData,
        name: val1,
        hashedKey: "filter_a_" + Date.now() + "",
      };
      const data2 = {
        ...baseData,
        name: val2,
        hashedKey: "filter_b_" + Date.now() + "",
      };

      await Factory.create("teamApiKey", {
        ...data1,
        team: { connect: { id: actor.id } },
      });
      await Factory.create("teamApiKey", {
        ...data2,
        team: { connect: { id: actor.id } },
      });

      const res = await client.get("/api/team-api-key?name=" + val1);
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(1);
      expect(res.body.data[0].name).toBe(val1);
    });

    it("should filter by hashedKey", async () => {
      // Wait to avoid collisions
      await new Promise((r) => setTimeout(r, 10));
      // Reuse getActorStatement to ensure correct actor context
      const actor = await client.as("team", { name: "Owner Team" });

      const val1 = "hashedKey_" + Date.now() + "_A";
      await new Promise((r) => setTimeout(r, 10));
      const val2 = "hashedKey_" + Date.now() + "_B";

      const relationSnippet = ", team: { connect: { id: actor.id } }"
        .replace(/^, /, "")
        .replace(/actor.id/g, "actor.id");
      const data1 = { ...baseData, hashedKey: val1 };
      const data2 = { ...baseData, hashedKey: val2 };

      await Factory.create("teamApiKey", {
        ...data1,
        team: { connect: { id: actor.id } },
      });
      await Factory.create("teamApiKey", {
        ...data2,
        team: { connect: { id: actor.id } },
      });

      const res = await client.get("/api/team-api-key?hashedKey=" + val1);
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(1);
      expect(res.body.data[0].hashedKey).toBe(val1);
    });

    it("should filter by prefix", async () => {
      // Wait to avoid collisions
      await new Promise((r) => setTimeout(r, 10));
      // Reuse getActorStatement to ensure correct actor context
      const actor = await client.as("team", { name: "Owner Team" });

      const val1 = "prefix_" + Date.now() + "_A";
      await new Promise((r) => setTimeout(r, 10));
      const val2 = "prefix_" + Date.now() + "_B";

      const relationSnippet = ", team: { connect: { id: actor.id } }"
        .replace(/^, /, "")
        .replace(/actor.id/g, "actor.id");
      const data1 = {
        ...baseData,
        prefix: val1,
        hashedKey: "filter_a_" + Date.now() + "",
      };
      const data2 = {
        ...baseData,
        prefix: val2,
        hashedKey: "filter_b_" + Date.now() + "",
      };

      await Factory.create("teamApiKey", {
        ...data1,
        team: { connect: { id: actor.id } },
      });
      await Factory.create("teamApiKey", {
        ...data2,
        team: { connect: { id: actor.id } },
      });

      const res = await client.get("/api/team-api-key?prefix=" + val1);
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(1);
      expect(res.body.data[0].prefix).toBe(val1);
    });
  });
});
