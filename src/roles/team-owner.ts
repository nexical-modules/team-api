import type { RolePolicy } from '@/lib/registries/role-registry';
import { type APIContext, type AstroGlobal } from 'astro';
import { db } from '@/lib/core/db';

export class TeamOwner implements RolePolicy {
  async check(
    context: AstroGlobal | APIContext,
    input: Record<string, unknown>,
    data?: unknown,
  ): Promise<void> {
    const user = context.locals?.actor;

    if (!user) {
      throw new Error('Unauthorized: Login required');
    }

    // Site Admin override
    if (user.role === 'ADMIN') return;

    // Determine Team ID from input or data
    // For standard CRUD, input usually contains the properties found in the DTO, or path params if merged.
    // However, for GET/UPDATE/DELETE /team/[id], the ID is in the path.
    // The generator/framework typically passes merged params or specific context.
    // Assuming 'id' in input is the team ID for Team operations, or 'teamId' for sub-resources.

    const typedInput = input as Record<string, string | undefined>;
    const typedData = data as { id?: string; teamId?: string } | undefined;

    // We need a robust way to find the teamId.
    const teamId = typedInput.teamId || typedData?.teamId || (typedData ? typedData.id : undefined);

    if (!teamId) {
      // If we can't determine teamId, and it's not a global 'create' (which checks limits elsewhere), deny?
      // Actually, for 'Create Team', there is no teamId yet.
      // If this role is applied to 'Create Team', it doesn't make sense (you can't be owner of a non-existent team).
      // So this role matches 'read', 'update', 'delete' on EXISTING teams.
      return;
    }

    // Allow Team (API Key) to access itself
    if (context.locals?.actorType === 'team' && user.id === teamId) return;

    const membership = await db.teamMember.findFirst({
      where: {
        userId: user.id,
        teamId: teamId,
      },
    });

    if (!membership || membership.role !== 'OWNER') {
      throw new Error('Forbidden: Team Owner access required');
    }
  }
}
