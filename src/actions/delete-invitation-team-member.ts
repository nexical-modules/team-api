// GENERATED CODE - THE SIGNATURE IS MANAGED BY THE GENERATOR. YOU MAY MODIFY THE IMPLEMENTATION AND ADD CUSTOM IMPORTS.
import { db } from '@/lib/core/db';
import { roleRegistry } from '@/lib/registries/role-registry';
import type { ServiceResponse } from '@/types/service';
import type { APIContext } from 'astro';

export class DeleteInvitationTeamMemberAction {
  public static async run(_input: void, context: APIContext): Promise<ServiceResponse<void>> {
    const { id } = context.params;
    if (!id) {
      console.log(
        '[DeleteInvitationTeamMemberAction] Missing id. context.params:',
        JSON.stringify(context.params),
      );
      return { success: false, error: 'invitation.error.missing_id' };
    }

    try {
      const invitation = await db.invitation.findUnique({ where: { id } });
      if (!invitation) return { success: false, error: 'invitation.error.not_found' };

      await roleRegistry.check('TEAM_ADMIN', context, { teamId: invitation.teamId });

      await db.invitation.delete({ where: { id } });
      return { success: true };
    } catch (error: unknown) {
      return { success: false, error: error.message || 'invitation.error.delete_failed' };
    }
  }
}
