// INITIAL GENERATED CODE - REVIEW AND MODIFY AS NEEDED FOR SERVICE INTEGRATION TESTS
import { createMockContext } from '@tests/integration/helpers/context';
import { Factory } from '@tests/integration/lib/factory';
import { describe, expect, it, beforeAll } from 'vitest';
import { DeleteInvitationTeamMemberAction } from '../../../src/actions/delete-invitation-team-member';
import { init } from '../../../src/server-init';

describe('DeleteInvitationTeamMemberAction - Service Integration', () => {
  beforeAll(async () => {
    await init();
  });

  it('should allow an admin to delete an invitation', async () => {
    const team = await Factory.create('team');
    const invitation = await Factory.create('invitation', { teamId: team.id });
    const ctx = await createMockContext('USER_ADMIN', 'user');
    ctx.params = { id: invitation.id };

    const result = await DeleteInvitationTeamMemberAction.run(undefined, ctx);

    if (!result.success) {
      console.log('[DEBUG] DeleteInvitationTeamMemberAction error:', result.error);
    }

    expect(result.success).toBe(true);
    const deleted = await Factory.prisma.invitation.findUnique({ where: { id: invitation.id } });
    expect(deleted).toBeNull();
  });
});
