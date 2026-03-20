// GENERATED CODE - DO NOT MODIFY
import { ApiClient } from '@tests/integration/lib/client';
import { Factory } from '@tests/integration/lib/factory';
import { TestServer } from '@tests/integration/lib/server';
import { beforeEach, describe, expect, it } from 'vitest';
describe('TeamMember API - Create', () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // POST /api/team-member
  describe('POST /api/team-member', () => {
    it('should allow TEAM_OWNER to create teamMember', async () => {
      const actor = await client.as('user', { role: 'USER_ADMIN', name: 'Owner Team' });

      const team_0 = await Factory.create('team', {});
      const payload = {
        ...{},
        teamId: team_0.id,
        userId: actor ? (actor as unknown as { id: string }).id : undefined,
      };

      const res = await client.post('/api/team-member', payload);

      expect(res.status).toBe(201);
      expect(res.body.data).toBeDefined();

      const created = await Factory.prisma.teamMember.findUnique({
        where: { id: res.body.data.id },
      });
      expect(created).toBeDefined();
    });

    it('should forbid non-admin/unauthorized users', async () => {
      client.useToken('invalid-token');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const actor = undefined as unknown;
      const team_0 = await Factory.create('team', {});
      const payload = {
        ...{},
        teamId: team_0.id,
        userId: actor ? (actor as unknown as { id: string }).id : undefined,
      };
      const res = await client.post('/api/team-member', payload);
      expect([401, 403, 404]).toContain(res.status);
    });
  });
});
