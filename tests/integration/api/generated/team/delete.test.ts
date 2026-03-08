// GENERATED CODE - DO NOT MODIFY
import { describe, it, expect, beforeEach } from 'vitest';
import { ApiClient } from '@tests/integration/lib/client';
import { TestServer } from '@tests/integration/lib/server';
import { Factory } from '@tests/integration/lib/factory';
describe('Team API - Delete', () => {
  let client: ApiClient;
  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });
  // DELETE /api/team/[id]
  describe('DELETE /api/team/[id]', () => {
    it('should delete team', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const actor = await client.as('user', { role: 'USER_ADMIN', name: 'Owner Team' });
      const target = await Factory.create('team', { ...{ name: 'name_test' } });
      const res = await client.delete(`/api/team/${target.id}`);
      expect(res.status).toBe(200);
      const check = await Factory.prisma.team.findUnique({ where: { id: target.id } });
      expect(check).toBeNull();
    });
  });
});
