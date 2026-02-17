import type { RolePolicy } from '@/lib/registries/role-registry';
import { type APIContext, type AstroGlobal } from 'astro';
import { db } from '@/lib/core/db';

export class TeamMember implements RolePolicy {
  async check(
    context: AstroGlobal | APIContext,
    input: Record<string, unknown>,
    data?: unknown,
  ): Promise<void> {
    const user = context.locals?.actor;

    if (!user) {
      throw new Error('Unauthorized: Login required');
    }

    if (user.role === 'ADMIN') return;

    const typedInput = input as Record<string, string | undefined>;
    const typedData = data as
      | {
          id?: string;
          teamId?: string;
          actorType?: string;
          actorId?: string;
          name?: string;
          slug?: string;
        }
      | undefined;

    // Try to find the team context from input or data
    let teamId = typedInput.teamId || typedData?.teamId;

    // Fallback to actorId if actorType is team
    if (!teamId && typedData?.actorType === 'team' && typedData?.actorId) {
      teamId = typedData.actorId;
    }

    // Final fallback: if data is the team itself
    if (
      !teamId &&
      typedData &&
      typeof typedData.id === 'string' &&
      (typedData.name || typedData.slug)
    ) {
      teamId = typedData.id;
    }

    // Ownership check: If actor is the owner, allow (regardless of team/user)
    if (typedData?.actorId === user.id) return;

    if (!teamId) {
      // If data exists and has an owner that isn't us, and we have no teamId to verify membership, DENY
      if (typedData?.actorId && typedData.actorId !== user.id) {
        throw new Error('Forbidden: Ownership required or missing team context');
      }
      return;
    }

    // Allow Team (API Key) to access itself or its owned resources
    if (context.locals?.actorType === 'team' && user.id === teamId) return;

    const membership = await db.teamMember.findFirst({
      where: {
        userId: user.id,
        teamId: teamId,
      },
    });

    if (!membership) {
      throw new Error('Forbidden: Team Member access required');
    }
  }
}
