import type { RolePolicy } from '@/lib/registries/role-registry';
import { type APIContext, type AstroGlobal } from 'astro';
import { db } from '@/lib/core/db';

export class TeamAdmin implements RolePolicy {
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
    const typedData = data as { id?: string; teamId?: string } | undefined;

    const teamId = typedInput.teamId || typedData?.teamId || (typedData ? typedData.id : undefined);

    if (!teamId) return;

    // Allow Team (API Key) to access itself
    if (context.locals?.actorType === 'team' && user.id === teamId) return;

    const membership = await db.teamMember.findFirst({
      where: {
        userId: user.id,
        teamId: teamId,
      },
    });

    if (!membership || (membership.role !== 'OWNER' && membership.role !== 'ADMIN')) {
      throw new Error('Forbidden: Team Admin access required');
    }
  }
}
