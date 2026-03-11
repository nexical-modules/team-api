// GENERATED CODE - DO NOT MODIFY
import { ApiClient } from '@tests/integration/lib/client';
import { Factory } from '@tests/integration/lib/factory';
import { TestServer } from '@tests/integration/lib/server';
import { beforeEach, describe, expect, it } from 'vitest';
describe('TeamApiKey API - Delete', () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // DELETE /api/team-api-key/[id]
  describe('DELETE /api/team-api-key/[id]', () => {
    it('should delete teamApiKey', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const actor = await client.as('user', { role: 'USER_ADMIN', name: 'Owner Team' });

      const team_0 = await Factory.create('team', {});
      const target = await Factory.create('teamApiKey', {
        ...{ name: 'name_test', hashedKey: 'hashedKey_test', prefix: 'prefix_test' },
        team: { connect: { id: team_0.id } },
      });

      const res = await client.delete(`/api/team-api-key/${target.id}`);

      expect(res.status).toBe(200);

      const check = await Factory.prisma.teamApiKey.findUnique({ where: { id: target.id } });
      expect(check).toBeNull();
    });
  });
});
