// GENERATED CODE - DO NOT MODIFY
import { db } from '@/lib/core/db';
import type { ServiceResponse } from '@/types/service';
import { HookSystem } from '@/lib/modules/hooks';
import type { TeamMember, Prisma } from '@prisma/client';
import type { ApiActor } from '@/lib/api/api-docs';
import { Logger } from '@/lib/core/logger';

/** Service class for TeamMember-related business logic. */
export class TeamMemberService {
  public static async list(
    params?: Prisma.TeamMemberFindManyArgs,
    actor?: ApiActor,
  ): Promise<ServiceResponse<TeamMember[]>> {
    try {
      let { where, take, skip, orderBy, select } = params || {};

      // Allow hooks to modify the query parameters (e.g. for scoping)
      // Pass actor context if available
      const filteredParams = await HookSystem.filter('teamMember.beforeList', {
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
        db.teamMember.findMany({ where, take, skip, orderBy, select }),
        db.teamMember.count({ where }),
      ]);

      const filteredData = await HookSystem.filter('teamMember.list', data);

      return { success: true, data: filteredData, total };
    } catch (error) {
      Logger.error('TeamMember list Error', error);
      return { success: false, error: 'teamMember.service.error.list_failed' };
    }
  }

  public static async get(
    id: string,
    select?: Prisma.TeamMemberSelect,
    actor?: ApiActor,
  ): Promise<ServiceResponse<TeamMember | null>> {
    try {
      const data = await db.teamMember.findUnique({ where: { id }, select });
      if (!data) return { success: false, error: 'teamMember.service.error.not_found' };

      const filtered = await HookSystem.filter('teamMember.read', data, { actor });

      return { success: true, data: filtered };
    } catch (error) {
      Logger.error('TeamMember get Error', error);
      return { success: false, error: 'teamMember.service.error.get_failed' };
    }
  }

  public static async create(
    data: Prisma.TeamMemberCreateInput,
    select?: Prisma.TeamMemberSelect,
    actor?: ApiActor,
  ): Promise<ServiceResponse<TeamMember>> {
    try {
      // Pass actor context to hooks for security/authorship validation
      const input = await HookSystem.filter('teamMember.beforeCreate', data, { actor });

      const newItem = await db.$transaction(async (tx) => {
        const created = await tx.teamMember.create({
          data: input as Prisma.TeamMemberCreateInput,
          select,
        });
        await HookSystem.dispatch('teamMember.created', {
          id: created.id,
          actorId: actor?.id || 'system',
        });
        return created;
      });

      const filtered = await HookSystem.filter('teamMember.read', newItem, { actor });

      return { success: true, data: filtered };
    } catch (error) {
      Logger.error('TeamMember create Error', error);
      return { success: false, error: 'teamMember.service.error.create_failed' };
    }
  }

  public static async update(
    id: string,
    data: Prisma.TeamMemberUpdateInput,
    select?: Prisma.TeamMemberSelect,
    actor?: ApiActor,
  ): Promise<ServiceResponse<TeamMember>> {
    try {
      const input = await HookSystem.filter('teamMember.beforeUpdate', data, { actor, id });

      const updatedItem = await db.$transaction(async (tx) => {
        const updated = await tx.teamMember.update({
          where: { id },
          data: input as Prisma.TeamMemberUpdateInput,
          select,
        });
        await HookSystem.dispatch('teamMember.updated', {
          id,
          changes: Object.keys(input),
          actorId: actor?.id,
        });
        return updated;
      });

      const filtered = await HookSystem.filter('teamMember.read', updatedItem, { actor });

      return { success: true, data: filtered };
    } catch (error) {
      Logger.error('TeamMember update Error', error);
      return { success: false, error: 'teamMember.service.error.update_failed' };
    }
  }

  public static async delete(id: string, actor?: ApiActor): Promise<ServiceResponse<void>> {
    try {
      await db.$transaction(async (tx) => {
        await tx.teamMember.delete({ where: { id } });
        await HookSystem.dispatch('teamMember.deleted', { id, actorId: actor?.id });
      });
      return { success: true };
    } catch (error) {
      Logger.error('TeamMember delete Error', error);
      return { success: false, error: 'teamMember.service.error.delete_failed' };
    }
  }
}
