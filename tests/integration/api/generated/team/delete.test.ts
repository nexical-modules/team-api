// GENERATED CODE - DO NOT MODIFY
import { ApiClient } from '@tests/integration/lib/client';
import { Factory } from '@tests/integration/lib/factory';
import { TestServer } from '@tests/integration/lib/server';
import { beforeEach, describe, expect, it } from 'vitest';
describe('Team API - Delete', () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // DELETE /api/team/[id]
  describe('DELETE /api/team/[id]', () => {
    it('should delete team', async () => {
      const _actor = await client.as('user', { role: 'USER_ADMIN', name: 'Owner Team' });

      const target = await Factory.create('team', { ...{ name: 'name_test' } });

      const res = await client.delete(`/api/team/${target.id}`);

      expect(res.status).toBe(200);

      const check = await Factory.prisma.team.findUnique({ where: { id: target.id } });
      expect(check).toBeNull();
    });
  });
});
