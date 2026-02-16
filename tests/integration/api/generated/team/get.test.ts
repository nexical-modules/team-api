// GENERATED CODE - DO NOT MODIFY
import { describe, it, expect, beforeEach } from 'vitest';
import { ApiClient } from '@tests/integration/lib/client';
import { TestServer } from '@tests/integration/lib/server';
describe('Team API - Get', () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // GET /api/team/[id]
  describe('GET /api/team/[id]', () => {
    it('should retrieve a specific team', async () => {
      const actor = await client.as('team', { name: 'Member Team' });

      const target = actor;

      const res = await client.get(`/api/team/${target.id}`);

      expect(res.status).toBe(200);
      expect(res.body.data.id).toBe(target.id);
    });

    it('should return 404 for missing id', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const actor = await client.as('team', { name: 'Member Team' });
      const res = await client.get('/api/team/missing-id-123');
      expect(res.status).toBe(404);
    });
  });
});
