import type { ApiClient } from '@tests/integration/lib/client';
import { Factory } from '@tests/integration/lib/factory';
import crypto from 'node:crypto';

export const actors = {
  team: async (client: ApiClient, params: Record<string, unknown> = {}) => {
    let actor;
    if (params.id) {
      actor = await Factory.prisma.team.findUnique({ where: { id: params.id as string } });
    }

    if (!actor) {
      const factoryParams = { ...params };
      if (factoryParams.strategy) delete factoryParams.strategy;
      if (factoryParams.role) delete factoryParams.role;
      actor = await Factory.create('team', factoryParams);
    }

    const rawKey = `sk_team_${crypto.randomUUID().replace(/-/g, '')}`;
    let dbKey = rawKey;

    dbKey = crypto.createHash('sha256').update(rawKey).digest('hex');

    // Verify team exists to avoid Prisma connect errors
    const check = await Factory.prisma.team.findUnique({ where: { id: actor.id } });
    if (!check) {
      throw new Error(
        `[Actor] Team ${actor.id} was "created" but not found in DB before APK creation.`,
      );
    }

    await Factory.create('teamApiKey', {
      teamId: actor.id,
      team: undefined,
      name: 'Test Token',
      hashedKey: dbKey,
      prefix: 'sk_team_',
    });

    client.useToken(rawKey);

    return { ...actor, token: { rawKey } };
  },
};
