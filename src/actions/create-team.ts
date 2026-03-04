// GENERATED CODE - THE SIGNATURE IS MANAGED BY THE GENERATOR. YOU MAY MODIFY THE IMPLEMENTATION AND ADD CUSTOM IMPORTS.
import { db } from '@/lib/core/db';
import type { ServiceResponse } from '@/types/service';
import type { APIContext } from 'astro';
import { CreateTeamDTO, Team, TeamRole } from '../sdk/types';
import { HookSystem } from '@/lib/modules/hooks';
import type { ApiActor } from '@/lib/api/api-docs';

export class CreateTeamAction {
  public static async run(
    input: CreateTeamDTO,
    context: APIContext,
  ): Promise<ServiceResponse<Team>> {
    const { name } = input;
    const userId = (context.locals.actor as ApiActor)?.id;

    if (!userId) return { success: false, error: 'Unauthorized' };

    try {
      // 1. Enforce Limit
      const teamCount = await db.teamMember.count({
        where: { userId: userId, role: TeamRole.TEAM_OWNER },
      });

      if (teamCount >= 10) {
        return { success: false, error: 'team.service.error.limit_reached' };
      }

      // 2. Create Team & Owner
      const team = await db.$transaction(async (tx) => {
        const newTeam = await tx.team.create({
          data: {
            name,
            members: {
              create: { userId: userId, role: 'TEAM_OWNER' as TeamRole },
            },
          },
        });
        return newTeam;
      });

      // 3. Side Effects
      await HookSystem.dispatch('team.created', {
        teamId: team.id,
        name: team.name,
        ownerId: userId,
      });

      return { success: true, data: team };
    } catch (error: unknown) {
      console.error(error);
      return { success: false, error: 'team.service.error.create_failed' };
    }
  }
}
