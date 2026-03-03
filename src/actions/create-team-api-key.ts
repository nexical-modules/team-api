import { randomBytes, createHash } from 'node:crypto';
import { TeamApiKeyService } from '../services/team-api-key-service';
import { roleRegistry } from '@/lib/registries/role-registry';
import type { CreateTeamApiKeyDTO, TeamApiKey } from '../sdk/types';
import type { APIContext } from 'astro';
import type { ServiceResponse } from '@/types/service';

export class CreateTeamApiKeyAction {
  private static KEY_PREFIX = 'ntk_';

  static async run(
    input: CreateTeamApiKeyDTO,
    context: APIContext,
  ): Promise<ServiceResponse<TeamApiKey>> {
    const { teamId, name, expiresAt } = input;
    const userId = (context.locals.actor as { id: string } | undefined)?.id;

    if (!userId) return { success: false, error: 'Unauthorized' };

    try {
      await roleRegistry.check('TEAM_OWNER', context, { teamId });

      const randomHex = randomBytes(32).toString('hex');
      const rawKey = `${this.KEY_PREFIX}${randomHex}`;
      const hashedKey = createHash('sha256').update(rawKey).digest('hex');

      // Use Service to create
      const result = await TeamApiKeyService.create({
        team: { connect: { id: teamId } },
        name,
        hashedKey,
        prefix: this.KEY_PREFIX,
        expiresAt,
      });

      if (!result.success || !result.data) {
        return {
          success: false,
          error: result.error || 'Failed to create key',
        };
      }

      return {
        success: true,
        data: {
          ...result.data,
          rawKey,
        },
      };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return { success: false, error: message };
    }
  }
}
