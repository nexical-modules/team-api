// INITIAL GENERATED CODE - REVIEW AND MODIFY AS NEEDED FOR SERVICE INTEGRATION TESTS
import { EmailRegistry } from '@/lib/email/email-registry';
import { sendEmail } from '@/lib/email/email-sender';
import { createMockContext } from '@tests/integration/helpers/context';
import { Factory } from '@tests/integration/lib/factory';
import { beforeAll, describe, expect, it } from 'vitest';
import { ResendInvitationTeamMemberAction } from '../../../src/actions/resend-invitation-team-member';
import { init } from '../../../src/server-init';

describe('ResendInvitationTeamMemberAction - Service Integration', () => {
  beforeAll(async () => {
    await init();
  });

  beforeEach(async () => {
    vi.spyOn({ sendEmail }, 'sendEmail').mockResolvedValue({ success: true, messageId: 'test' });
    vi.spyOn(EmailRegistry, 'render').mockResolvedValue('<html>Resend Invite</html>');
  });

  it('should allow an admin to resend an invitation', async () => {
    const team = await Factory.create('team');
    const invitation = await Factory.create('invitation', { teamId: team.id });
    const ctx = await createMockContext('USER_ADMIN', 'user');

    const input = { invitationId: invitation.id };
    const result = await ResendInvitationTeamMemberAction.run(input, ctx);

    if (!result.success) {
      console.log('[DEBUG] ResendInvitationTeamMemberAction error:', result.error);
    }

    expect(result.success).toBe(true);
  });
});
