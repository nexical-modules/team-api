import type { RolePolicy } from "@/lib/registries/role-registry";
import { type APIContext, type AstroGlobal } from "astro";
import { db } from "@/lib/core/db";

export class TeamAdmin implements RolePolicy {
    async check(context: AstroGlobal | APIContext, input: Record<string, any>, data?: any): Promise<void> {
        const user = context.locals?.actor || (context as any).user;

        if (!user) {
            throw new Error("Unauthorized: Login required");
        }

        if (user.role === 'ADMIN') return;

        const teamId = input.teamId || data?.teamId || (data ? data.id : undefined);

        if (!teamId) return;

        // Allow Team (API Key) to access itself
        if (context.locals?.actorType === 'team' && user.id === teamId) return;

        const membership = await db.teamMember.findFirst({
            where: {
                userId: user.id,
                teamId: teamId
            }
        });

        if (!membership || (membership.role !== 'OWNER' && membership.role !== 'ADMIN')) {
            throw new Error("Forbidden: Team Admin access required");
        }
    }
}
