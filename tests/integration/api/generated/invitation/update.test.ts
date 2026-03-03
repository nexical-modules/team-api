// GENERATED CODE - DO NOT MODIFY
import { describe, it, expect, beforeEach } from 'vitest';
import { ApiClient } from '@tests/integration/lib/client';
import { TestServer } from '@tests/integration/lib/server';
import { Factory } from '@tests/integration/lib/factory';
describe('Invitation API - Update', () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // PUT /api/invitation/[id]
  describe('PUT /api/invitation/[id]', () => {
    it('should update invitation', async () => {
      const actor = await client.as('team', {});

      const target = await Factory.create('invitation', {
        ...{ email: 'email_test', token: 'token_test', expires: new Date().toISOString() },
        team: { connect: { id: actor.id } },
      });

      const updatePayload = {
        email: 'email_updated',
        token: 'token_updated',
        expires: new Date().toISOString(),
      };

      const res = await client.put(`/api/invitation/${target.id}`, updatePayload);

      expect(res.status).toBe(200);

      const updated = await Factory.prisma.invitation.findUnique({ where: { id: target.id } });
      expect(updated?.email).toBe(updatePayload.email);
      expect(updated?.token).toBe(updatePayload.token);
      expect(updated?.expires.toISOString()).toBe(updatePayload.expires); // Compare as ISO strings
    });
  });
});
