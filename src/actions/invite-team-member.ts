// GENERATED CODE - THE SIGNATURE IS MANAGED BY THE GENERATOR. YOU MAY MODIFY THE IMPLEMENTATION AND ADD CUSTOM IMPORTS.
import type { ApiActor } from '@/lib/api/api-docs';
import { config } from '@/lib/core/config';
import { db as database } from '@/lib/core/db';
import { EmailRegistry } from '@/lib/email/email-registry';
import { sendEmail } from '@/lib/email/email-sender';
import { roleRegistry } from '@/lib/registries/role-registry';
import type { ServiceResponse } from '@/types/service';
import type { APIContext } from 'astro';
import { Invitation, InviteTeamMemberDTO, TeamRole } from '../sdk/types';
import { InvitationService } from '../services/invitation-service';
import { TeamMemberService } from '../services/team-member-service';

export class InviteTeamMemberAction {
  static async run(
    input: InviteTeamMemberDTO,
    context: APIContext,
  ): Promise<ServiceResponse<Invitation>> {
    const { teamId, email, role } = input;
    const userId = (context.locals.actor as ApiActor)?.id;

    if (!userId) return { success: false, error: 'Unauthorized' };

    try {
      await roleRegistry.check('TEAM_ADMIN', context, { teamId });

      const normalizedEmail = email.toLowerCase();
      const inviter = await database.user.findUnique({ where: { id: userId } });
      const team = await database.team.findUnique({ where: { id: teamId } });

      if (!inviter || !team) return { success: false, error: 'Invalid inviter or team' };

      // 1. Check if user exists
      const existingUser = await database.user.findUnique({
        where: { email: normalizedEmail },
      });

      if (existingUser) {
        // Check if already a member
        const existingMember = await database.teamMember.findUnique({
          where: { userId_teamId: { userId: existingUser.id, teamId } },
        });

        if (existingMember) {
          return { success: false, error: 'User is already a member' };
        }

        // Add directly as member
        const result = await TeamMemberService.create({
          team: { connect: { id: teamId } },
          user: { connect: { id: existingUser.id } },
          role: (role as TeamRole) || ('TEAM_MEMBER' as TeamRole),
        });

        if (!result.success) return { success: false, error: result.error };

        // Send Added Email
        const loginUrl = `${config.PUBLIC_SITE_URL || 'http://localhost:4321'}/login`;
        const html = await EmailRegistry.render('user:invite', {
          inviterName: inviter.name || inviter.email,
          teamName: team.name,
          role: role || 'TEAM_MEMBER',
          inviteUrl: loginUrl,
          strings: { subject: `Added to ${team.name}` }, // simplified
        });

        await sendEmail({
          to: normalizedEmail,
          subject: `You have been added to ${team.name}`,
          html,
        });

        return { success: true, data: { status: 'added' } as unknown as Invitation };
      }

      // 2. User does not exist, check existing invitation
      const existingInvite = await database.invitation.findUnique({
        where: { teamId_email: { teamId: teamId, email: normalizedEmail } },
      });

      if (existingInvite) {
        return { success: false, error: 'Invitation already exists' };
      }

      // 3. Create Invitation
      const token = crypto.randomUUID();
      const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

      const result = await InvitationService.create({
        team: { connect: { id: teamId } },
        email: normalizedEmail,
        teamRole: (role as TeamRole) || ('TEAM_MEMBER' as TeamRole),
        token,
        expires,
        inviter: { connect: { id: userId } },
      });

      if (!result.success) return result;

      // Send Invitation Email
      const registerUrl = `${config.PUBLIC_SITE_URL || 'http://localhost:4321'}/register?email=${encodeURIComponent(normalizedEmail)}`;
      const html = await EmailRegistry.render('user:invite', {
        inviterName: inviter.name || inviter.email,
        teamName: team.name,
        role: role || 'TEAM_MEMBER',
        inviteUrl: registerUrl,
        strings: { subject_invite: `Invitation to join ${team.name}` },
      });

      await sendEmail({
        to: normalizedEmail,
        subject: `Invitation to join ${team.name}`,
        html,
      });

      return result;
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      console.error('[InviteTeamMemberAction] Error:', message);
      if (error instanceof Error && error.stack) {
        console.error('[InviteTeamMemberAction] Error Stack:', error.stack);
      }
      return { success: false, error: message };
    }
  }
}
