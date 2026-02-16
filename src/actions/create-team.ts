// GENERATED CODE - DO NOT MODIFY
import { db } from '@/lib/core/db';
import type { ServiceResponse } from '@/types/service';
import type { APIContext } from 'astro';
import type { CreateTeamDTO, Team } from '../sdk/types';

export class CreateTeamAction {
  public static async run(
    input: CreateTeamDTO,
    context: APIContext,
  ): Promise<ServiceResponse<Team>> {
    const { name } = input;
    const userId = (context.locals.actor as any)?.id || (context as any).user?.id;

    if (!userId) return { success: false, error: 'Unauthorized' };

    try {
      // 1. Enforce Limit
      const teamCount = await db.teamMember.count({
        where: { userId: userId, role: TeamRole.OWNER },
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
              create: { userId: userId, role: TeamRole.OWNER },
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
    } catch (error: any) {
      console.error(error);
      return { success: false, error: 'team.service.error.create_failed' };
    }
  }
}
