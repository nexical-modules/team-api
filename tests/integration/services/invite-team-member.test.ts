import { EmailRegistry } from '@/lib/email/email-registry';
import { sendEmail } from '@/lib/email/email-sender';
import { createMockContext } from '@tests/integration/helpers/context';
import { Factory } from '@tests/integration/lib/factory';
import { describe, expect, it, vi, beforeAll, beforeEach } from 'vitest';
import { InviteTeamMemberAction } from '../../../src/actions/invite-team-member';
import { init } from '../../../src/server-init';

describe('InviteTeamMemberAction - Service Integration', () => {
  beforeAll(async () => {
    await init();
  });

  beforeEach(async () => {
    vi.spyOn({ sendEmail }, 'sendEmail').mockResolvedValue({ success: true, messageId: 'test' });
    vi.spyOn(EmailRegistry, 'render').mockResolvedValue('<html>Invite</html>');
  });

  it('should allow a team admin to invite a member', async () => {
    const ctx = await createMockContext('USER_EMPLOYEE', 'user');
    const user = ctx.locals.actor as any;
    const team = await Factory.create('team');

    // Make user an admin of the team
    await Factory.create('teamMember', {
      teamId: team.id,
      userId: user.id,
      role: 'TEAM_ADMIN',
      user: undefined,
      team: undefined,
    });

    const input = {
      teamId: team.id,
      email: 'newuser@example.com',
      role: 'TEAM_MEMBER' as any,
    };

    const result = await InviteTeamMemberAction.run(input, ctx);

    if (!result.success) {
      console.log('[DEBUG] InviteTeamMemberAction error:', result.error);
    }

    expect(result.success).toBe(true);

    const invitation = await Factory.prisma.invitation.findUnique({
      where: {
        teamId_email: {
          teamId: team.id,
          email: 'newuser@example.com',
        },
      },
    });

    expect(invitation).toBeDefined();
    expect(invitation?.teamRole).toBe('TEAM_MEMBER');
  });
});
