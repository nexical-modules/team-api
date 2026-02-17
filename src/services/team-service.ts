// GENERATED CODE - DO NOT MODIFY
import { db } from '@/lib/core/db';
import type { ServiceResponse } from '@/types/service';
import { HookSystem } from '@/lib/modules/hooks';
import type { Team, Prisma } from '@prisma/client';
import type { ApiActor } from '@/lib/api/api-docs';
import { Logger } from '@/lib/core/logger';

/** Service class for Team-related business logic. */
export class TeamService {
  public static async list(
    params?: Prisma.TeamFindManyArgs,
    actor?: ApiActor,
  ): Promise<ServiceResponse<Team[]>> {
    try {
      let { where, take, skip, orderBy, select } = params || {};

      // Allow hooks to modify the query parameters (e.g. for scoping)
      // Pass actor context if available
      const filteredParams = await HookSystem.filter('team.beforeList', {
        where,
        take,
        skip,
        orderBy,
        select,
        actor,
      });
      where = filteredParams.where;
      take = filteredParams.take;
      skip = filteredParams.skip;
      orderBy = filteredParams.orderBy;
      select = filteredParams.select;

      const [data, total] = await db.$transaction([
        db.team.findMany({ where, take, skip, orderBy, select }),
        db.team.count({ where }),
      ]);

      const filteredData = await HookSystem.filter('team.list', data);

      return { success: true, data: filteredData, total };
    } catch (error) {
      Logger.error('Team list Error', error);
      return { success: false, error: 'team.service.error.list_failed' };
    }
  }

  public static async get(
    id: string,
    select?: Prisma.TeamSelect,
    actor?: ApiActor,
  ): Promise<ServiceResponse<Team | null>> {
    try {
      const data = await db.team.findUnique({ where: { id }, select });
      if (!data) return { success: false, error: 'team.service.error.not_found' };

      const filtered = await HookSystem.filter('team.read', data, { actor });

      return { success: true, data: filtered };
    } catch (error) {
      Logger.error('Team get Error', error);
      return { success: false, error: 'team.service.error.get_failed' };
    }
  }

  public static async create(
    data: Prisma.TeamCreateInput,
    select?: Prisma.TeamSelect,
    actor?: ApiActor,
  ): Promise<ServiceResponse<Team>> {
    try {
      // Pass actor context to hooks for security/authorship validation
      const input = await HookSystem.filter('team.beforeCreate', data, { actor });

      const newItem = await db.$transaction(async (tx) => {
        const created = await tx.team.create({ data: input as Prisma.TeamCreateInput, select });
        await HookSystem.dispatch('team.created', {
          id: created.id,
          actorId: actor?.id || 'system',
        });
        return created;
      });

      const filtered = await HookSystem.filter('team.read', newItem, { actor });

      return { success: true, data: filtered };
    } catch (error) {
      Logger.error('Team create Error', error);
      return { success: false, error: 'team.service.error.create_failed' };
    }
  }

  public static async update(
    id: string,
    data: Prisma.TeamUpdateInput,
    select?: Prisma.TeamSelect,
    actor?: ApiActor,
  ): Promise<ServiceResponse<Team>> {
    try {
      const input = await HookSystem.filter('team.beforeUpdate', data, { actor, id });

      const updatedItem = await db.$transaction(async (tx) => {
        const updated = await tx.team.update({
          where: { id },
          data: input as Prisma.TeamUpdateInput,
          select,
        });
        await HookSystem.dispatch('team.updated', {
          id,
          changes: Object.keys(input),
          actorId: actor?.id,
        });
        return updated;
      });

      const filtered = await HookSystem.filter('team.read', updatedItem, { actor });

      return { success: true, data: filtered };
    } catch (error) {
      Logger.error('Team update Error', error);
      return { success: false, error: 'team.service.error.update_failed' };
    }
  }

  public static async delete(id: string, actor?: ApiActor): Promise<ServiceResponse<void>> {
    try {
      await db.$transaction(async (tx) => {
        await tx.team.delete({ where: { id } });
        await HookSystem.dispatch('team.deleted', { id, actorId: actor?.id });
      });
      return { success: true };
    } catch (error) {
      Logger.error('Team delete Error', error);
      return { success: false, error: 'team.service.error.delete_failed' };
    }
  }
}
