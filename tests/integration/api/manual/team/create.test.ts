import { describe, it, expect, beforeEach } from 'vitest';
import { ApiClient } from '@tests/integration/lib/client';

import { TestServer } from '@tests/integration/lib/server';
import { db } from '@/lib/core/db';

describe('Team Action - Create', () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  it('should allow a valid user to create a team', async () => {
    const actor = await client.as('user');
    const teamName = `Alpha Team ${Date.now()}`;

    const res = await client.post('/api/team/create', {
      name: teamName,
    });

    expect(res.status).toBe(200);
    expect(res.body.name).toBe(teamName);

    // Verify side effects in DB
    const teamId = res.body.id;
    const membership = await db.teamMember.findFirst({
      where: {
        teamId,
        userId: actor.id,
      },
    });

    expect(membership).toBeDefined();
    expect(membership?.role).toBe('OWNER');
  });

  it('should return 400 when team name is missing', async () => {
    await client.as('user');
    const res = await client.post('/api/team/create', {});
    expect(res.status).toBe(400);
  });

  it('should return 400 or 401/403 when not logged in', async () => {
    const res = await client.post('/api/team/create', { name: 'Hacker Team' });
    expect(res.status).toBeGreaterThanOrEqual(400);
  });
});
