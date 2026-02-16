// GENERATED CODE - DO NOT MODIFY
import { describe, it, expect, beforeEach } from 'vitest';
import { ApiClient } from '@tests/integration/lib/client';
import { Factory } from '@tests/integration/lib/factory';
import { TestServer } from '@tests/integration/lib/server';
describe('TeamMember API - Get', () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // GET /api/team-member/[id]
  describe('GET /api/team-member/[id]', () => {
    it('should retrieve a specific teamMember', async () => {
      const actor = await client.as('team', { name: 'Member Team' });

      const user_0 = await Factory.create('user', {});
      const target = await Factory.create('teamMember', {
        ...{},
        team: { connect: { id: actor.id } },
        user: { connect: { id: user_0.id } },
      });

      const res = await client.get(`/api/team-member/${target.id}`);

      expect(res.status).toBe(200);
      expect(res.body.data.id).toBe(target.id);
    });

    it('should return 404 for missing id', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const actor = await client.as('team', { name: 'Member Team' });
      const res = await client.get('/api/team-member/missing-id-123');
      expect(res.status).toBe(404);
    });
  });
});
