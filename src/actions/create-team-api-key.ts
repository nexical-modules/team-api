// GENERATED CODE - DO NOT MODIFY
// "actions" in this codebase seem to be files exposing a class or function?
// Let's check `user-api` actions for pattern.
// Usually they are just classes with `run`.

import type { CreateTeamApiKeyDTO, TeamApiKey } from '../sdk/types'; // Generated types
import type { APIContext } from 'astro';

export class CreateTeamApiKeyAction {
  static async run(
    input: CreateTeamApiKeyDTO,
    context: APIContext,
  ): Promise<ServiceResponse<TeamApiKey>> {
    const { teamId, name, expiresAt } = input;
    const userId = (context.locals.actor as any)?.id; // Assuming actor is populated

    if (!userId) return { success: false, error: 'Unauthorized' };

    try {
      await roleRegistry.check('team-owner', context, { teamId });

      const randomHex = randomBytes(32).toString('hex');
      const rawKey = `${KEY_PREFIX}${randomHex}`;
      const hashedKey = createHash('sha256').update(rawKey).digest('hex');

      // Use Service to create
      const result = await TeamApiKeyService.create({
        team: { connect: { id: teamId } },
        name,
        hashedKey,
        prefix: KEY_PREFIX,
        expiresAt, // Optional
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
          rawKey, // Return raw key only once
        },
      };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}
