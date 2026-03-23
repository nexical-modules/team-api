// INITIAL GENERATED CODE - THE SIGNATURE IS MANAGED BY THE GENERATOR. YOU MAY MODIFY THE IMPLEMENTATION AND ADD CUSTOM IMPORTS.
import type { ApiActor } from '@/lib/api/api-docs';
import { db } from '@/lib/core/db';
import { roleRegistry } from '@/lib/registries/role-registry';
import type { APIContext } from 'astro';

export abstract class BaseRole {
  abstract readonly name: string;
  protected readonly compatibleRoles: string[] = [];

  /**
   * Overridable method for contextual role resolution (e.g. team member check).
   * Default implementation returns true.
   */
  public async isCompatible(
    context: APIContext,
    input: Record<string, unknown> = {},
    data?: unknown,
  ): Promise<boolean> {
    const actor = context.locals.actor as ApiActor;
    const teamId = (input.teamId as string | undefined) || (input.id as string | undefined);
    if (!teamId) return true;

    if (teamId && actor?.id) {
      const membership = await db.teamMember.findUnique({
        where: {
          userId_teamId: {
            userId: actor.id,
            teamId,
          },
        },
      });
      if (membership) {
        return true;
      }
    }
    return false;
  }

  public async check(
    context: APIContext,
    input: Record<string, unknown> = {},
    data?: unknown,
  ): Promise<void> {
    const actor = context.locals.actor as ApiActor;
    if (!actor) {
      throw new Error('Unauthorized: No actor found');
    }

    const { role: actorRole } = actor as { role: string };
    const normalizeRole = (r: unknown) => String(r).toUpperCase().replace(/-/g, '_');

    const normalizedActorRole = normalizeRole(actorRole);

    // Global System Bypass (Super Roles)
    if (['USER_ADMIN'].map(normalizeRole).includes(normalizedActorRole)) {
      return;
    }

    const normalizedRequiredRole = normalizeRole(this.name);

    // 1. Direct Site Role match + Contextual Compatibility Check
    if (normalizedActorRole === normalizedRequiredRole) {
      if (await this.isCompatible(context, input, data)) {
        return;
      }
      throw new Error(`Forbidden: Role ${this.name} context check failed`);
    }

    // 2. Direct compatibility bypass (manual whitelist)
    if (this.compatibleRoles.map(normalizeRole).includes(normalizedActorRole)) {
      if (await this.isCompatible(context, input, data)) {
        return;
      }
      throw new Error(
        `Forbidden: Role ${this.name} context check failed via compatibility whitelist`,
      );
    }

    // 3. Contextual Role Check (Check membership role in the database)
    const teamId = (input.teamId as string | undefined) || (input.id as string | undefined);
    if (teamId && actor?.id) {
      const membership = await db.teamMember.findUnique({
        where: {
          userId_teamId: {
            userId: actor.id,
            teamId,
          },
        },
      });

      if (membership) {
        const normalizedMemberRole = normalizeRole(membership.role);
        if (normalizedMemberRole === normalizedRequiredRole) {
          return;
        }

        // Inheritance check for contextual role
        if (await this.checkInheritance(normalizedMemberRole, normalizedRequiredRole)) {
          return;
        }
      }
    }

    // 4. Inheritance Check for Site Role
    if (await this.checkInheritance(normalizedActorRole, normalizedRequiredRole)) {
      if (await this.isCompatible(context, input, data)) {
        return;
      }
      throw new Error(`Forbidden: Role ${this.name} context check failed via inheritance`);
    }

    throw new Error(`Forbidden: required role ${this.name} (actor is ${actorRole})`);
  }

  protected async checkInheritance(roleName: string, targetRole: string): Promise<boolean> {
    const normalizeRole = (r: unknown) => String(r).toUpperCase().replace(/-/g, '_');
    const policy = roleRegistry.get(roleName) as any;
    if (!policy || !('inherits' in policy)) return false;
    const inherits = policy.inherits as string[];
    if (inherits.map(normalizeRole).includes(targetRole)) return true;
    for (const parent of inherits) {
      if (await this.checkInheritance(parent, targetRole)) return true;
    }
    return false;
  }
}
