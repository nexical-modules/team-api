// GENERATED CODE - DO NOT MODIFY
import { describe, it, expect, beforeEach } from "vitest";
import { ApiClient } from "@tests/integration/lib/client";
import { Factory } from "@tests/integration/lib/factory";
import { TestServer } from "@tests/integration/lib/server";

const _test = describe("Team API - Get", () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // GET /api/team/[id]
  describe("GET /api/team/[id]", () => {
    it("should retrieve a specific team", async () => {
      const actor = await client.as("team", { name: "Member Team" });

      const target = actor;

      const res = await client.get(`/api/team/${target.id}`);

      expect(res.status).toBe(200);
      expect(res.body.id).toBe(target.id);
    });

    it("should return 404 for missing id", async () => {
      const actor = await client.as("team", { name: "Member Team" });
      const res = await client.get("/api/team/missing-id-123");
      expect(res.status).toBe(404);
    });
  });
});
