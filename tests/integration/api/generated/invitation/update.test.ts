// GENERATED CODE - DO NOT MODIFY
import { ApiClient } from '@tests/integration/lib/client';
import { Factory } from '@tests/integration/lib/factory';
import { TestServer } from '@tests/integration/lib/server';
import { beforeEach, describe, expect, it } from 'vitest';
describe('Invitation API - Update', () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // PUT /api/invitation/[id]
  describe('PUT /api/invitation/[id]', () => {
    it('should update invitation', async () => {
      const actor = await client.as('user', { role: 'USER_ADMIN', name: 'Admin Team' });

      const target = await Factory.create('invitation', {
        ...{ email: 'email_test', token: 'token_test', expires: new Date().toISOString() },
        inviter: { connect: { id: actor.id } },
      });
      const updatePayload = {
        ...{ email: 'email_updated', token: 'token_updated', expires: new Date().toISOString() },
        inviterId: actor ? (actor as unknown as { id: string }).id : undefined,
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
