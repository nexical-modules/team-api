// GENERATED CODE - DO NOT MODIFY
import { ApiClient } from '@tests/integration/lib/client';
import { Factory } from '@tests/integration/lib/factory';
import { TestServer } from '@tests/integration/lib/server';
import { beforeEach, describe, expect, it } from 'vitest';
describe('TeamMember API - Delete', () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // DELETE /api/team-member/[id]
  describe('DELETE /api/team-member/[id]', () => {
    it('should delete teamMember', async () => {
      const actor = await client.as('user', { role: 'USER_ADMIN', name: 'Owner Team' });

      const team_0 = await Factory.create('team', {});
      const target = await Factory.create('teamMember', {
        ...{},
        user: { connect: { id: actor.id } },
        team: { connect: { id: team_0.id } },
      });

      const res = await client.delete(`/api/team-member/${target.id}`);

      expect(res.status).toBe(200);

      const check = await Factory.prisma.teamMember.findUnique({ where: { id: target.id } });
      expect(check).toBeNull();
    });
  });
});
