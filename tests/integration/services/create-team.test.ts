// INITIAL GENERATED CODE - REVIEW AND MODIFY AS NEEDED FOR SERVICE INTEGRATION TESTS
import { createMockContext } from '@tests/integration/helpers/context';
import { Factory } from '@tests/integration/lib/factory';
import { beforeAll, describe, expect, it } from 'vitest';
import { CreateTeamAction } from '../../../src/actions/create-team';
import { init } from '../../../src/server-init';

describe('CreateTeamAction - Service Integration', () => {
  beforeAll(async () => {
    await init();
  });

  it('should allow a user to create a team', async () => {
    const ctx = await createMockContext('USER_EMPLOYEE', 'user');
    const user = ctx.locals.actor as any;

    const input = { name: 'New Team' };
    const result = await CreateTeamAction.run(input, ctx);

    if (!result.success) {
      console.log('[DEBUG] CreateTeamAction error:', result.error);
    }

    expect(result.success).toBe(true);
    expect(result.data?.name).toBe('New Team');

    const team = await Factory.prisma.team.findUnique({
      where: { id: result.data?.id },
      include: { members: true },
    });

    expect(team).toBeDefined();
    expect(team?.members).toHaveLength(1);
    expect(team?.members[0].userId).toBe(user.id);
    expect(team?.members[0].role).toBe('TEAM_OWNER');
  });
});
