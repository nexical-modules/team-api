// GENERATED CODE - DO NOT MODIFY
import { db } from '@/lib/core/db';
import type { ServiceResponse } from '@/types/service';
import { HookSystem } from '@/lib/modules/hooks';
import type { TeamApiKey, Prisma } from '@prisma/client';
import type { ApiActor } from '@/lib/api/api-docs';
import { Logger } from '@/lib/core/logger';

/** Service class for TeamApiKey-related business logic. */
export class TeamApiKeyService {
  public static async list(
    params?: Prisma.TeamApiKeyFindManyArgs,
    actor?: ApiActor,
  ): Promise<ServiceResponse<TeamApiKey[]>> {
    try {
      let { where, take, skip, orderBy, select } = params || {};

      // Allow hooks to modify the query parameters (e.g. for scoping)
      // Pass actor context if available
      const filteredParams = await HookSystem.filter('teamApiKey.beforeList', {
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
        db.teamApiKey.findMany({ where, take, skip, orderBy, select }),
        db.teamApiKey.count({ where }),
      ]);

      const filteredData = await HookSystem.filter('teamApiKey.list', data);

      return { success: true, data: filteredData, total };
    } catch (error) {
      Logger.error('TeamApiKey list Error', error);
      return { success: false, error: 'teamApiKey.service.error.list_failed' };
    }
  }

  public static async get(
    id: string,
    select?: Prisma.TeamApiKeySelect,
    actor?: ApiActor,
  ): Promise<ServiceResponse<TeamApiKey | null>> {
    try {
      const data = await db.teamApiKey.findUnique({ where: { id }, select });
      if (!data) return { success: false, error: 'teamApiKey.service.error.not_found' };

      const filtered = await HookSystem.filter('teamApiKey.read', data, { actor });

      return { success: true, data: filtered };
    } catch (error) {
      Logger.error('TeamApiKey get Error', error);
      return { success: false, error: 'teamApiKey.service.error.get_failed' };
    }
  }

  public static async create(
    data: Prisma.TeamApiKeyCreateInput,
    select?: Prisma.TeamApiKeySelect,
    actor?: ApiActor,
  ): Promise<ServiceResponse<TeamApiKey>> {
    try {
      // Pass actor context to hooks for security/authorship validation
      const input = await HookSystem.filter('teamApiKey.beforeCreate', data, { actor });

      const newItem = await db.$transaction(async (tx) => {
        const created = await tx.teamApiKey.create({
          data: input as Prisma.TeamApiKeyCreateInput,
          select,
        });
        await HookSystem.dispatch('teamApiKey.created', {
          id: created.id,
          actorId: actor?.id || 'system',
        });
        return created;
      });

      const filtered = await HookSystem.filter('teamApiKey.read', newItem, { actor });

      return { success: true, data: filtered };
    } catch (error) {
      Logger.error('TeamApiKey create Error', error);
      return { success: false, error: 'teamApiKey.service.error.create_failed' };
    }
  }

  public static async update(
    id: string,
    data: Prisma.TeamApiKeyUpdateInput,
    select?: Prisma.TeamApiKeySelect,
    actor?: ApiActor,
  ): Promise<ServiceResponse<TeamApiKey>> {
    try {
      const input = await HookSystem.filter('teamApiKey.beforeUpdate', data, { actor, id });

      const updatedItem = await db.$transaction(async (tx) => {
        const updated = await tx.teamApiKey.update({
          where: { id },
          data: input as Prisma.TeamApiKeyUpdateInput,
          select,
        });
        await HookSystem.dispatch('teamApiKey.updated', {
          id,
          changes: Object.keys(input),
          actorId: actor?.id,
        });
        return updated;
      });

      const filtered = await HookSystem.filter('teamApiKey.read', updatedItem, { actor });

      return { success: true, data: filtered };
    } catch (error) {
      Logger.error('TeamApiKey update Error', error);
      return { success: false, error: 'teamApiKey.service.error.update_failed' };
    }
  }

  public static async delete(id: string, actor?: ApiActor): Promise<ServiceResponse<void>> {
    try {
      await db.$transaction(async (tx) => {
        await tx.teamApiKey.delete({ where: { id } });
        await HookSystem.dispatch('teamApiKey.deleted', { id, actorId: actor?.id });
      });
      return { success: true };
    } catch (error) {
      Logger.error('TeamApiKey delete Error', error);
      return { success: false, error: 'teamApiKey.service.error.delete_failed' };
    }
  }
}
