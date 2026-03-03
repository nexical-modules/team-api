// GENERATED CODE - DO NOT MODIFY
export abstract class BaseRole implements RolePolicy {
  abstract readonly name: string;
  abstract readonly permissions: string[];

  public async check(
    context: APIContext,
    input?: Record<string, unknown>,
    data?: unknown,
  ): Promise<void> {
    const actor = context.locals.actor as ApiActor;
    if (!actor) {
      throw new Error('Unauthorized: No actor found');
    }

    // Site Admin Bypass
    if ((actor as { role?: string }).role === 'USER_ADMIN') {
      return;
    }

    // Try to find a teamId in input or params.teamId only.
    let teamId = String(
      input?.teamId ||
        context.params.teamId ||
        (input?.where as { teamId?: string })?.teamId ||
        (data as Record<string, unknown>)?.teamId ||
        '',
    );

    // If still missing, and it's a specific team route (e.g. GET /api/team/[id]), use id
    if (
      (!teamId || teamId === 'undefined' || teamId === '') &&
      context.url.pathname.match(/\/api\/team\/[^/]+$/)
    ) {
      teamId = String(context.params.id || input?.id || '');
    }

    // For team actors with no explicit teamId: they own their own context.
    if ((!teamId || teamId === 'undefined' || teamId === '') && actor.type === 'team') {
      return; // Team token implicitly grants access to its own resources
    }

    // If still missing teamId, but it's a collection list (no ID in path), we allow the check to pass
    // and let the service layer handle the filtering by actor.
    if ((!teamId || teamId === 'undefined' || teamId === '') && !context.params.id) {
      return;
    }

    if (!teamId || teamId === 'undefined' || teamId === '') {
      throw new Error(`Forbidden: missing team context for role ${this.name}`);
    }

    if (actor.type === 'team') {
      if (actor.id !== teamId) {
        throw new Error(`Forbidden: token does not belong to team ${teamId}`);
      }
      return; // Token represents the team itself, grant access
    }

    const membership = await db.teamMember.findFirst({
      where: {
        teamId: teamId,
        userId: actor.id,
      },
    });

    if (!membership) {
      throw new Error(`Forbidden: Not a member of team ${teamId}`);
    }

    const normalizeRole = (r: unknown) => String(r).toUpperCase().replace(/-/g, '_');
    const userRole = normalizeRole(membership.role);
    const requiredRole = normalizeRole(this.name);

    if (userRole === requiredRole) return;

    if (requiredRole === 'TEAM_MEMBER') {
      if (userRole === 'TEAM_ADMIN' || userRole === 'TEAM_OWNER') return;
    }

    if (requiredRole === 'TEAM_ADMIN') {
      if (userRole === 'TEAM_OWNER') return;
    }

    throw new Error(`Forbidden: required role ${this.name}`);
  }
}
