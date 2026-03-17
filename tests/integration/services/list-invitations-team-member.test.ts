// INITIAL GENERATED CODE - REVIEW AND MODIFY AS NEEDED FOR SERVICE INTEGRATION TESTS
import { createMockContext } from '@tests/integration/helpers/context';
import { Factory } from '@tests/integration/lib/factory';
import { beforeAll, describe, expect, it } from 'vitest';
import { ListInvitationsTeamMemberAction } from '../../../src/actions/list-invitations-team-member';
import { init } from '../../../src/server-init';

describe('ListInvitationsTeamMemberAction - Service Integration', () => {
  beforeAll(async () => {
    await init();
  });

  it('should list invitations for a team', async () => {
    const ctx = await createMockContext('USER_EMPLOYEE', 'user');
    const team = await Factory.create('team');

    // Create some invitations
    await Factory.create('invitation', {
      teamId: team.id,
      email: 'user1@example.com',
      token: 'token-1',
    });
    await Factory.create('invitation', {
      teamId: team.id,
      email: 'user2@example.com',
      token: 'token-2',
    });

    const input = { teamId: team.id };
    const result = await ListInvitationsTeamMemberAction.run(input, ctx);

    if (!result.success) {
      console.log('[DEBUG] ListInvitationsTeamMemberAction error:', result.error);
    }

    expect(result.success).toBe(true);
    expect(result.data).toHaveLength(2);
    expect(result.data?.map((i: any) => i.email)).toContain('user1@example.com');
    expect(result.data?.map((i: any) => i.email)).toContain('user2@example.com');
  });
});
