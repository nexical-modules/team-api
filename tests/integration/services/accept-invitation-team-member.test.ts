// INITIAL GENERATED CODE - REVIEW AND MODIFY AS NEEDED FOR SERVICE INTEGRATION TESTS
import { createMockContext } from '@tests/integration/helpers/context';
import { Factory } from '@tests/integration/lib/factory';
import { beforeAll, describe, expect, it } from 'vitest';
import { AcceptInvitationTeamMemberAction } from '../../../src/actions/accept-invitation-team-member';
import { init } from '../../../src/server-init';

describe('AcceptInvitationTeamMemberAction - Service Integration', () => {
  beforeAll(async () => {
    await init();
  });

  it('should allow a user to accept a valid invitation', async () => {
    const ctx = await createMockContext('USER_EMPLOYEE', 'user');
    const user = ctx.locals.actor as any;
    const team = await Factory.create('team');

    const invitation = await Factory.create('invitation', {
      teamId: team.id,
      email: user.email,
      token: 'valid-token',
      teamRole: 'TEAM_MEMBER',
      expires: new Date(Date.now() + 1000 * 60 * 60), // 1 hour from now
    });

    const result = await AcceptInvitationTeamMemberAction.run({ token: 'valid-token' }, ctx);

    if (!result.success) {
      console.log('[DEBUG] AcceptInvitationTeamMemberAction error:', result.error);
    }

    expect(result.success).toBe(true);

    const membership = await Factory.prisma.teamMember.findUnique({
      where: {
        userId_teamId: {
          teamId: team.id,
          userId: user.id,
        },
      },
    });

    expect(membership).toBeDefined();
    expect(membership?.role).toBe('TEAM_MEMBER');

    const deletedInvitation = await Factory.prisma.invitation.findUnique({
      where: { id: invitation.id },
    });
    expect(deletedInvitation).toBeNull();
  });
});
