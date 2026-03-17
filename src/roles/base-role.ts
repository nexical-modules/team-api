import type { APIContext } from 'astro';
import type { ApiActor } from '@/lib/api/api-docs';
import { roleRegistry } from '@/lib/registries/role-registry';

export abstract class BaseRole implements RolePolicy {
  abstract readonly name: string;
  protected readonly compatibleRoles: string[] = [];

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

    // Global System Bypass: USER_ADMIN is the root superuser.
    // Module-specific admins (e.g., AGENT_ADMIN) should inherit from their respective base roles
    // or be added to compatibleRoles in the generated role class.
    if (normalizeRole(actorRole) === 'USER_ADMIN') return;

    const normalizedActorRole = normalizeRole(actorRole);
    const normalizedRequiredRole = normalizeRole(this.name);

    if (normalizedActorRole === normalizedRequiredRole) return;
    if (this.compatibleRoles?.includes(normalizedActorRole)) return;

    // Inheritance Check
    const checkInheritance = (roleName: string, targetRole: string): boolean => {
      const policy = roleRegistry.get(roleName);
      if (!policy || !('inherits' in policy)) return false;
      const inherits = (policy as { inherits: string[] }).inherits as string[];
      if (inherits.includes(targetRole)) return true;
      for (const parent of inherits) {
        if (checkInheritance(parent, targetRole)) return true;
      }
      return false;
    };

    // Database check for team membership
    const teamId = input.teamId as string | undefined;
    if (teamId && actor.id) {
      try {
        const { db } = await import('@/lib/core/db');
        const membership = await db.teamMember.findUnique({
          where: {
            userId_teamId: {
              userId: actor.id,
              teamId,
            },
          },
        });

        if (membership) {
          const membershipRole = normalizeRole(membership.role);
          if (membershipRole === normalizedRequiredRole) return;

          // Check inheritance for membership role
          if (checkInheritance(membershipRole, normalizedRequiredRole)) return;
        }
      } catch (dbError) {
        console.error(
          `[BaseRole] Database check failed for user ${actor.id} on team ${teamId}:`,
          dbError,
        );
        // Continue to primary role check
      }
    }

    // Inheritance Check for the actor's primary role
    if (checkInheritance(normalizedActorRole, normalizedRequiredRole)) return;

    throw new Error(`Forbidden: required role ${this.name}`);
  }
}
