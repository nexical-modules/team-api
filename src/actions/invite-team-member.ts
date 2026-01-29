import { db } from "@/lib/core/db";
import { roleRegistry } from "@/lib/registries/role-registry";
import { TeamMemberService } from "../services/team-member-service";
import { InvitationService } from "../services/invitation-service";
import type { InviteTeamMemberDTO, Invitation } from "../sdk/types";
import type { ServiceResponse } from "@/types/service";
import { TeamRole } from "@modules/team-api/src/sdk";
import { EmailRegistry } from "@/lib/email/email-registry";
import { sendEmail } from "@/lib/email/email-sender";
import { config } from "@/lib/core/config";
import type { APIContext } from "astro";

export class InviteTeamMemberAction {
  static async run(
    input: InviteTeamMemberDTO,
    context: APIContext,
  ): Promise<ServiceResponse<Invitation>> {
    const { teamId, email, role } = input;
    const userId = (context.locals.actor as any)?.id;

    if (!userId) return { success: false, error: "Unauthorized" };

    try {
      await roleRegistry.check("team-admin", context, { teamId });

      const normalizedEmail = email.toLowerCase();
      const inviter = await db.user.findUnique({ where: { id: userId } });
      const team = await db.team.findUnique({ where: { id: teamId } });

      if (!inviter || !team)
        return { success: false, error: "Invalid inviter or team" };

      // 1. Check if user exists
      const existingUser = await db.user.findUnique({
        where: { email: normalizedEmail },
      });

      if (existingUser) {
        // Check if already a member
        const existingMember = await db.teamMember.findUnique({
          where: { userId_teamId: { userId: existingUser.id, teamId } },
        });

        if (existingMember) {
          return { success: false, error: "User is already a member" };
        }

        // Add directly as member
        const result = await TeamMemberService.create({
          team: { connect: { id: teamId } },
          user: { connect: { id: existingUser.id } },
          role: (role as TeamRole) || TeamRole.MEMBER,
        });

        if (!result.success) return { success: false, error: result.error };

        // Send Added Email
        const loginUrl = `${config.PUBLIC_SITE_URL || "http://localhost:4321"}/login`;
        const html = await EmailRegistry.render("user:invite", {
          inviterName: inviter.name || inviter.email,
          teamName: team.name,
          role: role || "MEMBER",
          inviteUrl: loginUrl,
          strings: { subject: `Added to ${team.name}` }, // simplified
        });

        await sendEmail({
          to: normalizedEmail,
          subject: `You have been added to ${team.name}`,
          html,
        });

        return { success: true, data: { status: "added" } as any };
      }

      // 2. User does not exist, check existing invitation
      const existingInvite = await db.invitation.findUnique({
        where: { teamId_email: { teamId: teamId, email: normalizedEmail } },
      });

      if (existingInvite) {
        return { success: false, error: "Invitation already exists" };
      }

      // 3. Create Invitation
      const token = crypto.randomUUID();
      const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

      const result = await InvitationService.create({
        team: { connect: { id: teamId } },
        email: normalizedEmail,
        teamRole: (role as TeamRole) || TeamRole.MEMBER,
        token,
        expires,
        inviter: { connect: { id: userId } },
      });

      if (!result.success) return result;

      // Send Invitation Email
      const registerUrl = `${config.PUBLIC_SITE_URL || "http://localhost:4321"}/register?email=${encodeURIComponent(normalizedEmail)}`;
      const html = await EmailRegistry.render("user:invite", {
        inviterName: inviter.name || inviter.email,
        teamName: team.name,
        role: role || "MEMBER",
        inviteUrl: registerUrl,
        strings: { subject_invite: `Invitation to join ${team.name}` },
      });

      await sendEmail({
        to: normalizedEmail,
        subject: `Invitation to join ${team.name}`,
        html,
      });

      return result;
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}
