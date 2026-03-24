// GENERATED CODE - DO NOT MODIFY
import { ApiClient } from '@tests/integration/lib/client';
import { Factory } from '@tests/integration/lib/factory';
import { TestServer } from '@tests/integration/lib/server';
import { beforeEach, describe, expect, it } from 'vitest';
describe('Team API - Update', () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // PUT /api/team/[id]
  describe('PUT /api/team/[id]', () => {
    it('should update team', async () => {
      const _actor = await client.as('user', { role: 'USER_ADMIN', name: 'Admin Team' });

      const target = await Factory.create('team', { ...{ name: 'name_test' } });
      const updatePayload = {
        name: 'name_updated',
      };

      const res = await client.put(`/api/team/${target.id}`, updatePayload);

      expect(res.status).toBe(200);

      const updated = await Factory.prisma.team.findUnique({ where: { id: target.id } });
      expect(updated?.name).toBe(updatePayload.name);
    });
  });
});
