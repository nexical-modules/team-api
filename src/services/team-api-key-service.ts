// GENERATED CODE - DO NOT MODIFY
import { db } from "@/lib/core/db";
import { Logger } from "@/lib/core/logger";
import type { ServiceResponse } from "@/types/service";
import { HookSystem } from "@/lib/modules/hooks";
import type { TeamApiKey, Prisma } from "@prisma/client";
import type { ApiActor } from "@/lib/api/api-docs";

// GENERATED CODE - DO NOT MODIFY
/** Service class for TeamApiKey-related business logic. */
export class TeamApiKeyService {
  public static async list(
    params?: Prisma.TeamApiKeyFindManyArgs,
    actor?: ApiActor,
  ): Promise<ServiceResponse<TeamApiKey[]>> {
    try {
      const { where, take, skip, orderBy, select } = params || {};
      const [data, total] = await db.$transaction([
        db.teamApiKey.findMany({ where, take, skip, orderBy, select }),
        db.teamApiKey.count({ where }),
      ]);

      const filteredData = await HookSystem.filter("teamApiKey.list", data);

      return { success: true, data: filteredData, total };
    } catch (error) {
      Logger.error("TeamApiKey list Error", error);
      return { success: false, error: "teamApiKey.service.error.list_failed" };
    }
  }

  public static async get(
    id: string,
    select?: Prisma.TeamApiKeySelect,
  ): Promise<ServiceResponse<TeamApiKey | null>> {
    try {
      const data = await db.teamApiKey.findUnique({ where: { id }, select });
      if (!data)
        return { success: false, error: "teamApiKey.service.error.not_found" };

      const filtered = await HookSystem.filter("teamApiKey.read", data);

      return { success: true, data: filtered };
    } catch (error) {
      Logger.error("TeamApiKey get Error", error);
      return { success: false, error: "teamApiKey.service.error.get_failed" };
    }
  }

  public static async create(
    data: Prisma.TeamApiKeyCreateInput,
    select?: Prisma.TeamApiKeySelect,
    actor?: ApiActor,
  ): Promise<ServiceResponse<TeamApiKey>> {
    try {
      const input = await HookSystem.filter("teamApiKey.beforeCreate", data);

      const newItem = await db.$transaction(async (tx) => {
        const created = await tx.teamApiKey.create({
          data: input as any,
          select,
        });
        await HookSystem.dispatch("teamApiKey.created", {
          id: created.id,
          actorId: "system",
        });
        return created;
      });

      const filtered = await HookSystem.filter("teamApiKey.read", newItem);

      return { success: true, data: filtered };
    } catch (error) {
      Logger.error("TeamApiKey create Error", error);
      return {
        success: false,
        error: "teamApiKey.service.error.create_failed",
      };
    }
  }

  public static async update(
    id: string,
    data: Prisma.TeamApiKeyUpdateInput,
    select?: Prisma.TeamApiKeySelect,
    actor?: ApiActor,
  ): Promise<ServiceResponse<TeamApiKey>> {
    try {
      const input = await HookSystem.filter("teamApiKey.beforeUpdate", data);

      const updatedItem = await db.$transaction(async (tx) => {
        const updated = await tx.teamApiKey.update({
          where: { id },
          data: input as any,
          select,
        });
        await HookSystem.dispatch("teamApiKey.updated", {
          id,
          changes: Object.keys(input),
        });
        return updated;
      });

      const filtered = await HookSystem.filter("teamApiKey.read", updatedItem);

      return { success: true, data: filtered };
    } catch (error) {
      Logger.error("TeamApiKey update Error", error);
      return {
        success: false,
        error: "teamApiKey.service.error.update_failed",
      };
    }
  }

  public static async delete(id: string): Promise<ServiceResponse<void>> {
    try {
      await db.$transaction(async (tx) => {
        await tx.teamApiKey.delete({ where: { id } });
        await HookSystem.dispatch("teamApiKey.deleted", { id });
      });
      return { success: true };
    } catch (error) {
      Logger.error("TeamApiKey delete Error", error);
      return {
        success: false,
        error: "teamApiKey.service.error.delete_failed",
      };
    }
  }
}
