// GENERATED CODE - DO NOT MODIFY
import { describe, it, expect, beforeEach } from 'vitest';
import { ApiClient } from '@tests/integration/lib/client';
import { Factory } from '@tests/integration/lib/factory';
import { TestServer } from '@tests/integration/lib/server';
describe('Invitation API - Delete', () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // DELETE /api/invitation/[id]
  describe('DELETE /api/invitation/[id]', () => {
    it('should delete invitation', async () => {
      const actor = await client.as('user', { name: 'Admin Team' });

      const target = await Factory.create('invitation', {
        ...{
          email: 'email_test',
          token: 'token_test',
          expires: new Date().toISOString(),
        },
        inviter: { connect: { id: actor.id } },
      });

      const res = await client.delete(`/api/invitation/${target.id}`);

      expect(res.status).toBe(200);

      const check = await Factory.prisma.invitation.findUnique({
        where: { id: target.id },
      });
      expect(check).toBeNull();
    });
  });
});
