// GENERATED CODE - DO NOT MODIFY
import { ApiClient } from '@tests/integration/lib/client';
import { Factory } from '@tests/integration/lib/factory';
import { TestServer } from '@tests/integration/lib/server';
import { beforeEach, describe, expect, it } from 'vitest';
describe('TeamMember API - Get', () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // GET /api/team-member/[id]
  describe('GET /api/team-member/[id]', () => {
    it('should retrieve a specific teamMember', async () => {
      const actor = await client.as('user', { role: 'USER_ADMIN', name: 'Owner Team' });

      const team_0 = await Factory.create('team', {});
      const target = await Factory.create('teamMember', {
        ...{},
        user: { connect: { id: actor ? (actor as unknown as { id: string }).id : undefined } },
        team: { connect: { id: team_0.id } },
      });

      const res = await client.get(`/api/team-member/${target.id}`);

      expect(res.status).toBe(200);
      expect(res.body.data.id).toBe(target.id);
    });

    it('should return 404 for missing id', async () => {
      const _actor = await client.as('user', { role: 'USER_ADMIN', name: 'Owner Team' });
      const res = await client.get('/api/team-member/missing-id-123');
      expect(res.status).toBe(404);
    });
  });
});
