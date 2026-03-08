// GENERATED CODE - DO NOT MODIFY
import { describe, it, expect, beforeEach } from 'vitest';
import { ApiClient } from '@tests/integration/lib/client';
import { TestServer } from '@tests/integration/lib/server';
import { Factory } from '@tests/integration/lib/factory';
describe('TeamMember API - Update', () => {
  let client: ApiClient;
  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });
  // PUT /api/team-member/[id]
  describe('PUT /api/team-member/[id]', () => {
    it('should update teamMember', async () => {
      const actor = await client.as('user', { role: 'USER_ADMIN', name: 'Owner Team' });
      const team_0 = await Factory.create('team', {});
      const target = await Factory.create('teamMember', {
        ...{},
        user: { connect: { id: actor.id } },
        team: { connect: { id: team_0.id } },
      });
      const updatePayload = {};
      const res = await client.put(`/api/team-member/${target.id}`, updatePayload);
      expect(res.status).toBe(200);
      // No specific assertions provided
    });
  });
});
