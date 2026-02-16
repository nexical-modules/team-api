// GENERATED CODE - DO NOT MODIFY
import { describe, it, expect, beforeEach } from 'vitest';
import { ApiClient } from '@tests/integration/lib/client';
import { Factory } from '@tests/integration/lib/factory';
import { TestServer } from '@tests/integration/lib/server';
describe('Team API - Delete', () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // DELETE /api/team/[id]
  describe('DELETE /api/team/[id]', () => {
    it('should delete team', async () => {
      const actor = await client.as('team', { name: 'Owner Team' });

      const target = actor;

      const res = await client.delete(`/api/team/${target.id}`);

      expect(res.status).toBe(200);

      const check = await Factory.prisma.team.findUnique({
        where: { id: target.id },
      });
      expect(check).toBeNull();
    });
  });
});
