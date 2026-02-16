// GENERATED CODE - DO NOT MODIFY
import { describe, it, expect, beforeEach } from 'vitest';
import { ApiClient } from '@tests/integration/lib/client';
import { Factory } from '@tests/integration/lib/factory';
import { TestServer } from '@tests/integration/lib/server';
describe('TeamMember API - List', () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // GET /api/team-member
  describe('GET /api/team-member', () => {
    const baseData = {};

    it('should allow team-member to list teamMembers', async () => {
      const actor = await client.as('team', { name: 'Member Team' });

      // Cleanup first to ensure clean state
      await Factory.prisma.teamMember.deleteMany();

      // Seed data
      const _listSuffix = Date.now();
      await Factory.create('teamMember', {
        ...baseData,
        team: { connect: { id: actor.id } },
      });
      await Factory.create('teamMember', {
        ...baseData,
        team: { connect: { id: actor.id } },
      });

      const res = await client.get('/api/team-member');

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data.length).toBeGreaterThanOrEqual(2);
      expect(res.body.meta).toBeDefined();
    });

    it('should verify pagination metadata', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const actor = await client.as('team', { name: 'Member Team' });

      // Cleanup and seed specific count
      await Factory.prisma.teamMember.deleteMany();

      const _suffix = Date.now();
      const createdIds: string[] = [];
      const totalTarget = 15;

      // Check current count

      const _listSuffix = Date.now();
      const currentCount = 0;
      const toCreate = totalTarget - currentCount;

      for (let i = 0; i < toCreate; i++) {
        const rec = await Factory.create('teamMember', {
          ...baseData,
          team: { connect: { id: actor.id } },
        });
        createdIds.push(rec.id);
      }

      // Page 1
      const res1 = await client.get('/api/team-member?take=5&skip=0');
      expect(res1.status).toBe(200);
      expect(res1.body.data.length).toBe(5);
      expect(res1.body.meta.total).toBe(15);

      // Page 2
      const res2 = await client.get('/api/team-member?take=5&skip=5');
      expect(res2.status).toBe(200);
      expect(res2.body.data.length).toBe(5);
      expect(res2.body.data[0].id).not.toBe(res1.body.data[0].id);
    });
  });
});
