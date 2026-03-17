// INITIAL GENERATED CODE - REVIEW AND MODIFY AS NEEDED FOR SERVICE INTEGRATION TESTS
import { createMockContext } from '@tests/integration/helpers/context';
import { Factory } from '@tests/integration/lib/factory';
import { beforeAll, describe, expect, it } from 'vitest';
import { CreateTeamApiKeyAction } from '../../../src/actions/create-team-api-key';
import { init } from '../../../src/server-init';

describe('CreateTeamApiKeyAction - Service Integration', () => {
  beforeAll(async () => {
    await init();
  });

  it('should allow a team owner to create an API key', async () => {
    const ctx = await createMockContext('USER_EMPLOYEE', 'user');
    const user = ctx.locals.actor as any;
    const team = await Factory.create('team');

    // Make user an owner of the team
    await Factory.create('teamMember', {
      teamId: team.id,
      userId: user.id,
      role: 'TEAM_OWNER',
      user: undefined,
      team: undefined,
    });

    const input = {
      teamId: team.id,
      name: 'Test Key',
    };

    const result = await CreateTeamApiKeyAction.run(input, ctx);

    if (!result.success) {
      console.log('[DEBUG] CreateTeamApiKeyAction error:', result.error);
    }

    expect(result.success).toBe(true);
    expect(result.data?.name).toBe('Test Key');
    expect((result.data as any).rawKey).toBeDefined();

    const apiKey = await Factory.prisma.teamApiKey.findUnique({
      where: { id: result.data?.id },
    });

    expect(apiKey).toBeDefined();
    expect(apiKey?.teamId).toBe(team.id);
  });
});
