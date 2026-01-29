import { HookSystem } from "@/lib/modules/hooks";
import { EmailRegistry } from "@/lib/email/email-registry";
import { sendEmail } from "@/lib/email/email-sender";
import { config } from "@/lib/core/config";
import { db } from "@/lib/core/db";

export class InvitationHooks {
    static init() {
        HookSystem.on('invitation.created', async (event: any) => {
            const { id } = event;
            const invitation = await db.invitation.findUnique({
                where: { id },
                include: { team: true, inviter: true }
            });

            if (!invitation) return;

            const registerUrl = `${config.PUBLIC_SITE_URL || "http://localhost:4321"}/register?email=${encodeURIComponent(invitation.email)}&token=${invitation.token}`;

            // Use translation if available, or defaults
            // Assuming strings passed or derived.
            // For now, simpler implementation.

            const html = await EmailRegistry.render('user:invite', {
                inviterName: invitation.inviter?.name || "Someone",
                teamName: invitation.team?.name || "Team",
                role: invitation.role,
                inviteUrl: registerUrl,
                strings: {} // TODO: Populate strings
            });

            await sendEmail({
                to: invitation.email,
                subject: `Invitation to join ${invitation.team?.name}`,
                html
            });
        });
    }
}

export const init = InvitationHooks.init;
