// GENERATED CODE - DO NOT MODIFY
import { describe, it, expect, beforeEach } from "vitest";
import { ApiClient } from "@tests/integration/lib/client";
import { Factory } from "@tests/integration/lib/factory";
import { TestServer } from "@tests/integration/lib/server";

// GENERATED CODE - DO NOT MODIFY
const _test = describe("Invitation API - Get", () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // GET /api/invitation/[id]
  describe("GET /api/invitation/[id]", () => {
    it("should retrieve a specific invitation", async () => {
      const actor = await client.as("user", {});

      const target = await Factory.create("invitation", {
        ...{
          email: "email_test",
          token: "token_test",
          expires: new Date().toISOString(),
        },
        inviter: { connect: { id: actor.id } },
      });

      const res = await client.get(`/api/invitation/${target.id}`);

      expect(res.status).toBe(200);
      expect(res.body.id).toBe(target.id);
    });

    it("should return 404 for missing id", async () => {
      const actor = await client.as("user", {});
      const res = await client.get("/api/invitation/missing-id-123");
      expect(res.status).toBe(404);
    });
  });
});
