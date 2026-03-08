// GENERATED CODE - DO NOT MODIFY
import { describe, it, expect, beforeEach } from 'vitest';
import { ApiClient } from '@tests/integration/lib/client';
import { TestServer } from '@tests/integration/lib/server';
import { Factory } from '@tests/integration/lib/factory';
describe('TeamApiKey API - Get', () => {
  let client: ApiClient;
  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });
  // GET /api/team-api-key/[id]
  describe('GET /api/team-api-key/[id]', () => {
    it('should retrieve a specific teamApiKey', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const actor = await client.as('user', { role: 'USER_ADMIN', name: 'Owner Team' });
      const team_0 = await Factory.create('team', {});
      const target = await Factory.create('teamApiKey', {
        ...{ name: 'name_test', hashedKey: 'hashedKey_test', prefix: 'prefix_test' },
        team: { connect: { id: team_0.id } },
      });
      const res = await client.get(`/api/team-api-key/${target.id}`);
      expect(res.status).toBe(200);
      expect(res.body.data.id).toBe(target.id);
    });
    it('should return 404 for missing id', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const actor = await client.as('user', { role: 'USER_ADMIN', name: 'Owner Team' });
      const res = await client.get('/api/team-api-key/missing-id-123');
      expect(res.status).toBe(404);
    });
  });
});
