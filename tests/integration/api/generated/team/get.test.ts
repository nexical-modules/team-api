// GENERATED CODE - DO NOT MODIFY
import { describe, it, expect, beforeEach } from 'vitest';
import { ApiClient } from '@tests/integration/lib/client';
import { TestServer } from '@tests/integration/lib/server';
import { Factory } from '@tests/integration/lib/factory';
describe('Team API - Get', () => {
  let client: ApiClient;
  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });
  // GET /api/team/[id]
  describe('GET /api/team/[id]', () => {
    it('should retrieve a specific team', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const actor = await client.as('user', { role: 'USER_EMPLOYEE', name: 'Member Team' });
      const target = await Factory.create('team', { ...{ name: 'name_test' } });
      const res = await client.get(`/api/team/${target.id}`);
      expect(res.status).toBe(200);
      expect(res.body.data.id).toBe(target.id);
    });
    it('should return 404 for missing id', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const actor = await client.as('user', { role: 'USER_EMPLOYEE', name: 'Member Team' });
      const res = await client.get('/api/team/missing-id-123');
      expect(res.status).toBe(404);
    });
  });
});
