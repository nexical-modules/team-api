// GENERATED CODE - DO NOT MODIFY
import { describe, it, expect, beforeEach } from 'vitest';
import { ApiClient } from '@tests/integration/lib/client';
import { Factory } from '@tests/integration/lib/factory';
import { TestServer } from '@tests/integration/lib/server';
describe('Invitation API - List', () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  // GET /api/invitation
  describe('GET /api/invitation', () => {
    const baseData = {
      email: 'email_test',
      token: 'token_test',
      expires: new Date().toISOString(),
    };

    it('should allow team-admin to list invitations', async () => {
      const actor = await client.as('user', { name: 'Admin Team' });

      // Cleanup first to ensure clean state
      await Factory.prisma.invitation.deleteMany();

      // Seed data
      const _listSuffix = Date.now();
      await Factory.create('invitation', {
        ...baseData,
        email: 'list_1_' + _listSuffix + '@example.com',
        inviter: { connect: { id: actor.id } },
      });
      await Factory.create('invitation', {
        ...baseData,
        email: 'list_2_' + _listSuffix + '@example.com',
        inviter: { connect: { id: actor.id } },
      });

      const res = await client.get('/api/invitation');

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data.length).toBeGreaterThanOrEqual(2);
      expect(res.body.meta).toBeDefined();
    });

    it('should verify pagination metadata', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const actor = await client.as('user', { name: 'Admin Team' });

      // Cleanup and seed specific count
      await Factory.prisma.invitation.deleteMany();

      const _suffix = Date.now();
      const createdIds: string[] = [];
      const totalTarget = 15;

      // Check current count

      const _listSuffix = Date.now();
      const currentCount = 0;
      const toCreate = totalTarget - currentCount;

      for (let i = 0; i < toCreate; i++) {
        const rec = await Factory.create('invitation', {
          ...baseData,
          email: `page_${i}_${_listSuffix}@example.com`,
          inviter: { connect: { id: actor.id } },
        });
        createdIds.push(rec.id);
      }

      // Page 1
      const res1 = await client.get('/api/invitation?take=5&skip=0');
      expect(res1.status).toBe(200);
      expect(res1.body.data.length).toBe(5);
      expect(res1.body.meta.total).toBe(15);

      // Page 2
      const res2 = await client.get('/api/invitation?take=5&skip=5');
      expect(res2.status).toBe(200);
      expect(res2.body.data.length).toBe(5);
      expect(res2.body.data[0].id).not.toBe(res1.body.data[0].id);
    });

    it('should filter by email', async () => {
      // Wait to avoid collisions
      await new Promise((r) => setTimeout(r, 10));
      // Reuse getActorStatement to ensure correct actor context
      const actor = await client.as('user', { name: 'Admin Team' });
      // Note: Ensure role allows filtering if restricted

      const val1 = 'email_' + Date.now() + '_A@example.com';
      const val2 = 'email_' + Date.now() + '_B@example.com';

      const data1 = { ...baseData, email: val1 };
      const data2 = { ...baseData, email: val2 };

      await Factory.create('invitation', {
        ...data1,
        inviter: { connect: { id: actor.id } },
      });
      await Factory.create('invitation', {
        ...data2,
        inviter: { connect: { id: actor.id } },
      });

      const res = await client.get('/api/invitation?email=' + val1);
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(1);
      expect(res.body.data[0].email).toBe(val1);
    });

    it('should filter by token', async () => {
      // Wait to avoid collisions
      await new Promise((r) => setTimeout(r, 10));
      // Reuse getActorStatement to ensure correct actor context
      const actor = await client.as('user', { name: 'Admin Team' });
      // Note: Ensure role allows filtering if restricted

      const val1 = 'token_' + Date.now() + '_A';
      const val2 = 'token_' + Date.now() + '_B';

      const data1 = {
        ...baseData,
        token: val1,
        email: 'filter_a_' + Date.now() + '@example.com',
      };
      const data2 = {
        ...baseData,
        token: val2,
        email: 'filter_b_' + Date.now() + '@example.com',
      };

      await Factory.create('invitation', {
        ...data1,
        inviter: { connect: { id: actor.id } },
      });
      await Factory.create('invitation', {
        ...data2,
        inviter: { connect: { id: actor.id } },
      });

      const res = await client.get('/api/invitation?token=' + val1);
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(1);
      expect(res.body.data[0].token).toBe(val1);
    });
  });
});
