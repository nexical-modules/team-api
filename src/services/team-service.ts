// GENERATED CODE - DO NOT MODIFY
import { db } from "@/lib/core/db";
import { Logger } from "@/lib/core/logger";
import type { ServiceResponse } from "@/types/service";
import { HookSystem } from "@/lib/modules/hooks";
import type { Team, Prisma } from "@prisma/client";
import type { ApiActor } from "@/lib/api/api-docs";

// GENERATED CODE - DO NOT MODIFY
/** Service class for Team-related business logic. */
export class TeamService {
  public static async list(
    params?: Prisma.TeamFindManyArgs,
    actor?: ApiActor,
  ): Promise<ServiceResponse<Team[]>> {
    try {
      const { where, take, skip, orderBy, select } = params || {};
      const [data, total] = await db.$transaction([
        db.team.findMany({ where, take, skip, orderBy, select }),
        db.team.count({ where }),
      ]);

      const filteredData = await HookSystem.filter("team.list", data);

      return { success: true, data: filteredData, total };
    } catch (error) {
      Logger.error("Team list Error", error);
      return { success: false, error: "team.service.error.list_failed" };
    }
  }

  public static async get(
    id: string,
    select?: Prisma.TeamSelect,
  ): Promise<ServiceResponse<Team | null>> {
    try {
      const data = await db.team.findUnique({ where: { id }, select });
      if (!data)
        return { success: false, error: "team.service.error.not_found" };

      const filtered = await HookSystem.filter("team.read", data);

      return { success: true, data: filtered };
    } catch (error) {
      Logger.error("Team get Error", error);
      return { success: false, error: "team.service.error.get_failed" };
    }
  }

  public static async create(
    data: Prisma.TeamCreateInput,
    select?: Prisma.TeamSelect,
    actor?: ApiActor,
  ): Promise<ServiceResponse<Team>> {
    try {
      const input = await HookSystem.filter("team.beforeCreate", data);

      const newItem = await db.$transaction(async (tx) => {
        const created = await tx.team.create({ data: input as any, select });
        await HookSystem.dispatch("team.created", {
          id: created.id,
          actorId: "system",
        });
        return created;
      });

      const filtered = await HookSystem.filter("team.read", newItem);

      return { success: true, data: filtered };
    } catch (error) {
      Logger.error("Team create Error", error);
      return { success: false, error: "team.service.error.create_failed" };
    }
  }

  public static async update(
    id: string,
    data: Prisma.TeamUpdateInput,
    select?: Prisma.TeamSelect,
    actor?: ApiActor,
  ): Promise<ServiceResponse<Team>> {
    try {
      const input = await HookSystem.filter("team.beforeUpdate", data);

      const updatedItem = await db.$transaction(async (tx) => {
        const updated = await tx.team.update({
          where: { id },
          data: input as any,
          select,
        });
        await HookSystem.dispatch("team.updated", {
          id,
          changes: Object.keys(input),
        });
        return updated;
      });

      const filtered = await HookSystem.filter("team.read", updatedItem);

      return { success: true, data: filtered };
    } catch (error) {
      Logger.error("Team update Error", error);
      return { success: false, error: "team.service.error.update_failed" };
    }
  }

  public static async delete(id: string): Promise<ServiceResponse<void>> {
    try {
      await db.$transaction(async (tx) => {
        await tx.team.delete({ where: { id } });
        await HookSystem.dispatch("team.deleted", { id });
      });
      return { success: true };
    } catch (error) {
      Logger.error("Team delete Error", error);
      return { success: false, error: "team.service.error.delete_failed" };
    }
  }
}
