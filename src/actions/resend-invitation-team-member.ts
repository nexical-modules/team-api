// GENERATED CODE - THE SIGNATURE IS MANAGED BY THE GENERATOR. YOU MAY MODIFY THE IMPLEMENTATION AND ADD CUSTOM IMPORTS.
import { db } from '@/lib/core/db';
import { roleRegistry } from '@/lib/registries/role-registry';
import type { ServiceResponse } from '@/types/service';
import type { APIContext } from 'astro';
import type { ResendInvitationDTO } from '../sdk/types';
import { EmailRegistry } from '@/lib/email/email-registry';
import { sendEmail } from '@/lib/email/email-sender';
import { config } from '@/lib/core/config';

export class ResendInvitationTeamMemberAction {
  public static async run(
    input: ResendInvitationDTO,
    context: APIContext,
  ): Promise<ServiceResponse<void>> {
    const id = input.invitationId || context.params.id;
    if (!id) return { success: false, error: 'invitation.error.missing_id' };

    try {
      const invitation = await db.invitation.findUnique({
        where: { id },
        include: { team: true, inviter: true },
      });
      if (!invitation) return { success: false, error: 'invitation.error.not_found' };

      await roleRegistry.check('TEAM_ADMIN', context, { teamId: invitation.teamId });

      // Send Invitation Email (reuse logic from invite-team-member)
      const registerUrl = `${config.PUBLIC_SITE_URL || 'http://localhost:4321'}/register?email=${encodeURIComponent(invitation.email)}`;
      const html = await EmailRegistry.render('user:invite', {
        inviterName: invitation.inviter?.name || invitation.inviter?.email || 'Someone',
        teamName: invitation.team?.name || 'a team',
        role: invitation.teamRole,
        inviteUrl: registerUrl,
        strings: { subject_invite: `Invitation to join ${invitation.team?.name}` },
      });

      await sendEmail({
        to: invitation.email,
        subject: `Invitation to join ${invitation.team?.name}`,
        html,
      });

      return { success: true };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return { success: false, error: message || 'invitation.error.resend_failed' };
    }
  }
}
