import type { RolePolicy } from "@/lib/registries/role-registry";
import { type APIContext, type AstroGlobal } from "astro";
import { db } from "@/lib/core/db";

export class TeamMember implements RolePolicy {
    async check(context: AstroGlobal | APIContext, input: Record<string, any>, data?: any): Promise<void> {
        const user = context.locals?.actor || (context as any).user;

        if (!user) {
            throw new Error("Unauthorized: Login required");
        }

        if (user.role === 'ADMIN') return;

        // Try to find the team context from input or data
        let teamId = input.teamId || data?.teamId;

        // Fallback to actorId if actorType is team
        if (!teamId && data?.actorType === 'team' && data?.actorId) {
            teamId = data.actorId;
        }

        // Final fallback: if data is the team itself
        if (!teamId && data && typeof data.id === 'string' && (data.name || data.slug)) {
            teamId = data.id;
        }

        // Ownership check: If actor is the owner, allow (regardless of team/user)
        if (data?.actorId === user.id) return;

        // console.log(`[TeamMember DEBUG] Actor: ${user.id} ActorType: ${context.locals?.actorType} targetTeamId: ${teamId}`);

        if (!teamId) {
            // If data exists and has an owner that isn't us, and we have no teamId to verify membership, DENY
            if (data?.actorId && data.actorId !== user.id) {
                throw new Error("Forbidden: Ownership required or missing team context");
            }
            return;
        }

        // Allow Team (API Key) to access itself or its owned resources
        if (context.locals?.actorType === 'team' && user.id === teamId) return;

        const membership = await db.teamMember.findFirst({
            where: {
                userId: user.id,
                teamId: teamId
            }
        });

        if (!membership) {
            // console.log(`[TeamMember DEBUG] Membership not found for user ${user.id} in team ${teamId}`);
            throw new Error("Forbidden: Team Member access required");
        }
    }
}
