// GENERATED CODE - DO NOT MODIFY
import { db } from '@/lib/core/db';
import type { ServiceResponse } from '@/types/service';
import type { APIContext } from 'astro';
import type { AcceptInvitationDTO } from '../sdk/types';

export class AcceptInvitationTeamMemberAction {
  public static async run(
    input: AcceptInvitationDTO,
    context: APIContext,
  ): Promise<ServiceResponse<void>> {
    const { token } = input;
    const user = (context.locals.actor as any) || (context as any).user;

    if (!user) return { success: false, error: 'Unauthorized' };

    try {
      // 1. Find Invitation
      const invitation = await db.invitation.findUnique({
        where: { token },
      });

      if (!invitation) {
        return { success: false, error: 'invitation.error.not_found' };
      }

      // 2. Check Expiry
      if (invitation.expires && invitation.expires < new Date()) {
        return { success: false, error: 'invitation.error.expired' };
      }

      // 3. Verify Email
      if (invitation.email.toLowerCase() !== user.email.toLowerCase()) {
        return { success: false, error: 'invitation.error.email_mismatch' };
      }

      // 4. Create Member
      const result = await db.$transaction(async (tx) => {
        const member = await tx.teamMember.create({
          data: {
            teamId: invitation.teamId!,
            userId: user.id,
            role: invitation.teamRole,
          },
        });

        // 5. Delete Invitation
        await tx.invitation.delete({
          where: { id: invitation.id },
        });

        return member;
      });

      // 6. Hook
      await HookSystem.dispatch('invitation.accepted', {
        invitationId: invitation.id,
        teamId: invitation.teamId,
        userId: user.id,
      });

      return { success: true, data: result };
    } catch (error: any) {
      console.error(error);
      return { success: false, error: 'invitation.error.accept_failed' };
    }
  }
}
