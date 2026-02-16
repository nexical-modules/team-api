// GENERATED CODE - DO NOT MODIFY
import { describe, it, expect, beforeEach } from 'vitest';
import { ApiClient } from '@tests/integration/lib/client';
import { Factory } from '@tests/integration/lib/factory';
import { TestServer } from '@tests/integration/lib/server';
describe('Team API - Update', () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // PUT /api/team/[id]
  describe('PUT /api/team/[id]', () => {
    it('should update team', async () => {
      const actor = await client.as('team', { name: 'Admin Team' });

      const target = actor;

      const updatePayload = {
        name: 'name_updated',
      };

      const res = await client.put(`/api/team/${target.id}`, updatePayload);

      expect(res.status).toBe(200);

      const updated = await Factory.prisma.team.findUnique({
        where: { id: target.id },
      });
      expect(updated?.name).toBe(updatePayload.name);
    });
  });
});
