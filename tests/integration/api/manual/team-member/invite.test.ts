import { describe, it, expect, beforeEach } from 'vitest';
import { ApiClient } from '@tests/integration/lib/client';
import { Factory } from '@tests/integration/lib/factory';
import { TestServer } from '@tests/integration/lib/server';
import { db } from '@/lib/core/db';

describe('TeamMember Action - Invite', () => {
  let client: ApiClient;

  beforeEach(async () => {
    client = new ApiClient(TestServer.getUrl());
  });

  it('should create an invitation for a non-existent email', async () => {
    const owner = await client.as('user');
    const team = await Factory.create('team');
    await Factory.create('teamMember', {
      user: { connect: { id: owner.id } },
      team: { connect: { id: team.id } },
      role: 'OWNER',
    });

    const inviteEmail = `new_user_${Date.now()}@example.com`;
    const res = await client.post('/api/team-member/invitations', {
      teamId: team.id,
      email: inviteEmail,
      role: 'MEMBER',
    });

    expect(res.status).toBe(200);
    expect(res.body.data.email).toBe(inviteEmail);

    // Verify invitation in DB
    const invite = await db.invitation.findUnique({
      where: {
        teamId_email: { teamId: team.id, email: inviteEmail },
      },
    });
    expect(invite).toBeDefined();
    expect(invite?.email).toBe(inviteEmail);
  });

  it('should add an existing user directly to the team', async () => {
    const owner = await client.as('user');
    const team = await Factory.create('team');
    await Factory.create('teamMember', {
      user: { connect: { id: owner.id } },
      team: { connect: { id: team.id } },
      role: 'OWNER',
    });

    const otherUser = await Factory.create('user');

    const res = await client.post('/api/team-member/invitations', {
      teamId: team.id,
      email: otherUser.email,
      role: 'ADMIN',
    });

    expect(res.status).toBe(200);
    expect(res.body.data.status).toBe('added');

    // Verify membership in DB
    const membership = await db.teamMember.findUnique({
      where: {
        userId_teamId: { userId: otherUser.id, teamId: team.id },
      },
    });
    expect(membership).toBeDefined();
    expect(membership?.role).toBe('ADMIN');

    // Verify NO invitation in DB
    const invite = await db.invitation.findFirst({
      where: { teamId: team.id, email: otherUser.email },
    });
    expect(invite).toBeNull();
  });

  it('should return error if user is already a member', async () => {
    const owner = await client.as('user');
    const team = await Factory.create('team');
    await Factory.create('teamMember', {
      user: { connect: { id: owner.id } },
      team: { connect: { id: team.id } },
      role: 'OWNER',
    });

    const res = await client.post('/api/team-member/invitations', {
      teamId: team.id,
      email: owner.email,
    });

    // Action returns { success: false, error: ... }, which handler translates to 400
    expect(res.status).toBe(400);
    expect(res.body.error).toBeDefined();
  });

  it('should deny access for non-admin members', async () => {
    const owner = await Factory.create('user');
    const team = await Factory.create('team');
    await Factory.create('teamMember', {
      user: { connect: { id: owner.id } },
      team: { connect: { id: team.id } },
      role: 'OWNER',
    });

    const member = await Factory.create('user');
    await Factory.create('teamMember', {
      team: { connect: { id: team.id } },
      user: { connect: { id: member.id } },
      role: 'MEMBER',
    });

    // Use member session
    await client.as('user', { id: member.id });

    const res = await client.post('/api/team-member/invitations', {
      teamId: team.id,
      email: 'denied@example.com',
    });

    // ApiGuard.protect throws "Forbidden", which results in 403
    expect(res.status).toBe(403);
    // expect(res.body.error).toBeDefined(); // Astro's 403 might vary in body
  });
});
