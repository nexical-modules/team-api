// INITIAL GENERATED CODE - REVIEW AND MODIFY AS NEEDED FOR SERVICE INTEGRATION TESTS
import { createMockContext } from '@tests/integration/helpers/context';
import { Factory } from '@tests/integration/lib/factory';
import { describe, expect, it } from 'vitest';
import { ResendInvitationTeamMemberAction } from '../../../src/actions/resend-invitation-team-member';

describe('ResendInvitationTeamMemberAction - Service Integration', () => {
  beforeAll(async () => {
    await init();
    vi.spyOn({ sendEmail }, 'sendEmail').mockResolvedValue({ success: true, messageId: 'test' });
    vi.spyOn(EmailRegistry, 'render').mockResolvedValue('<html>Resend Invite</html>');
  });

  it('should allow an admin to resend an invitation', async () => {
    const team = await Factory.create('team');
    const invitation = await Factory.create('invitation', { teamId: team.id });
    const ctx = await createMockContext('USER_ADMIN', 'user');

    const input = { invitationId: invitation.id };
    const result = await ResendInvitationTeamMemberAction.run(input, ctx);

    expect(result.success).toBe(true);
  });
});
