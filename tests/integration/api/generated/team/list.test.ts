// GENERATED CODE - DO NOT MODIFY
import { describe, it, expect, beforeEach } from "vitest";
import { ApiClient } from "@tests/integration/lib/client";
import { Factory } from "@tests/integration/lib/factory";
import { TestServer } from "@tests/integration/lib/server";

const _test = describe("Team API - List", () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // GET /api/team
  describe("GET /api/team", () => {
    const baseData = { name: "name_test" };

    it("should allow team-member to list teams", async () => {
      const actor = await client.as("team", { name: "Member Team" });

      // Cleanup first to ensure clean state
      await Factory.prisma.team.deleteMany({
        where: { id: { not: actor.id } },
      });

      // Seed data
      const suffix = Date.now();
      await Factory.create("team", { ...baseData });
      await Factory.create("team", { ...baseData });

      const res = await client.get("/api/team");

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data.length).toBeGreaterThanOrEqual(2);
      expect(res.body.meta).toBeDefined();
    });

    it("should verify pagination metadata", async () => {
      const actor = await client.as("team", { name: "Member Team" });

      // Cleanup and seed specific count
      await Factory.prisma.team.deleteMany({
        where: { id: { not: actor.id } },
      });

      const suffix = Date.now();
      const createdIds: string[] = [];
      const totalTarget = 15;
      let currentCount = 0;
      currentCount = await Factory.prisma.team.count({
        where: { id: actor.id },
      });

      const toCreate = totalTarget - currentCount;

      for (let i = 0; i < toCreate; i++) {
        const rec = await Factory.create("team", { ...baseData });
        createdIds.push(rec.id);
      }

      // Page 1
      const res1 = await client.get("/api/team?take=5&skip=0");
      expect(res1.status).toBe(200);
      expect(res1.body.data.length).toBe(5);
      expect(res1.body.meta.total).toBe(15);

      // Page 2
      const res2 = await client.get("/api/team?take=5&skip=5");
      expect(res2.status).toBe(200);
      expect(res2.body.data.length).toBe(5);
      expect(res2.body.data[0].id).not.toBe(res1.body.data[0].id);
    });

    it("should filter by name", async () => {
      // Wait to avoid collisions
      await new Promise((r) => setTimeout(r, 10));
      // Reuse getActorStatement to ensure correct actor context
      const actor = await client.as("team", { name: "Member Team" });

      const val1 = "name_" + Date.now() + "_A";
      await new Promise((r) => setTimeout(r, 10));
      const val2 = "name_" + Date.now() + "_B";

      const relationSnippet = ""
        .replace(/^, /, "")
        .replace(/actor.id/g, "actor.id");
      const data1 = { ...baseData, name: val1 };
      const data2 = { ...baseData, name: val2 };

      await Factory.create("team", { ...data1 });
      await Factory.create("team", { ...data2 });

      const res = await client.get("/api/team?name=" + val1);
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(1);
      expect(res.body.data[0].name).toBe(val1);
    });
  });
});
