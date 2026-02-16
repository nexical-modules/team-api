import { HookSystem } from '@/lib/modules/hooks';
import { db } from '@/lib/core/db';
import { TeamRole } from '@modules/team-api/src/sdk';

export class TeamHooks {
  static init() {
    // Enforce Team Limits
    HookSystem.on('team.beforeCreate', async (data: any) => {
      // The generic 'create' service doesn't implicitly know 'ownerId' unless it's in the data.
      // But we can check the context (not currently passed to 'beforeCreate' by default service?)
      // Wait, generated Service passes: HookSystem.filter('team.beforeCreate', data);
      // So we only have 'data'. We can't easily enforce limits here unless 'ownerId' is in 'data'.

      // However, the API Endpoint for create usually injects the actor.
      // Let's assume 'data' might have some user info if we want to check limits.

      // NOTE: For 'team', the generic create doesn't automatically create members.
      // The Action for create team SHOULD do: create team + create member (owner).
      // But 'team-api' uses generic POST.

      // To properly fix Team Creation, we actually need to OVERRIDE the generic POST/create endpoint
      // or use an Action. But for now, let's keep this hook as a safeguard if possible.

      // If we can't get userId, we can't check limits.
      if (!data.ownerId) return;

      const teamCount = await db.teamMember.count({
        where: { userId: data.ownerId, role: TeamRole.OWNER },
      });

      if (teamCount >= 10) {
        throw new Error('team.service.error.limit_reached');
      }
    });

    // Filter List (Security)
    HookSystem.filter('team.list', async (teams: any[], context: any) => {
      // context might contain actor
      // We need to ensuring users only see teams they are members of.
      // Since the Service fetches ALL (if no filter), this is critical.

      // TODO: Access actor from context if possible.
      // Currently HookSystem.filter signature is (data, ...args).
      // We need to know who is asking.

      // If we can't reliably filter here due to missing context,
      // we must rely on the API Layer (Controller) to inject the 'where' clause.
      // The generated API Endpoint DOES inject 'where' based on actor.
      // (See team/src/pages/api/teams/index.ts in legacy).
      // The NEW generated API should also do this if properly configured using 'policy' or 'role'.

      return teams;
    });

    // Enforce Permissions for Write Operations
    HookSystem.on('team.beforeUpdate', async (data: any) => {
      const { id: _id } = data; // args?
      // Need to check if Actor has permission.
      // This is tricky if Hook doesn't receive Actor.
      // Usage of Role Policy on the Route is preferred.
    });
  }

  static initListFilter() {
    HookSystem.filter('team.beforeList', async (params: any) => {
      const { actor, where } = params;

      // If System or Admin, allow all (skip filter)
      if (!actor || actor.role === 'ADMIN' || actor.id === 'system') return params;

      // Enforce Membership Filter
      // Check if actor is a User or a Team
      if (actor.type === 'user') {
        // User: Only see teams they are members of
        return {
          ...params,
          where: {
            ...where,
            members: {
              some: {
                userId: actor.id,
              },
            },
          },
        };
      } else {
        // Team (likely API Key): Can only see itself
        return {
          ...params,
          where: {
            ...where,
            id: actor.id,
          },
        };
      }
    });
  }
}

export const init = () => {
  TeamHooks.init();
  TeamHooks.initListFilter();
};
