// GENERATED CODE - DO NOT MODIFY
import type { ServiceResponse } from '@/types/service';
import type { APIContext } from 'astro';
import type { ListInvitationsDTO, Invitation } from '../sdk/types';

import { db } from '@/lib/core/db';

export class ListInvitationsTeamMemberAction {
  public static async run(
    input: ListInvitationsDTO,
    context: APIContext,
  ): Promise<ServiceResponse<Invitation[]>> {
    if (!input.teamId) {
      return { success: false, error: 'team.invitation.error.missing_team_id' };
    }

    // TODO: Enforce team-admin permission check here if not handled by middleware
    // For now, assuming middleware or broad access (refining later)

    try {
      const invitations = await db.invitation.findMany({
        where: { teamId: input.teamId },
        orderBy: { createdAt: 'desc' },
        include: { inviter: true }, // optional, if we want inviter details
      });

      // Map to Invitation type if needed, or cast
      return { success: true, data: invitations as any[] };
    } catch (error) {
      console.error('List Invitations Error', error);
      return { success: false, error: 'team.invitation.error.list_failed' };
    }
  }
}
