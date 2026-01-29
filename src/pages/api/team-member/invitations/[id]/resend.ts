// GENERATED CODE - DO NOT MODIFY
import { defineApi } from "@/lib/api/api-docs";
import { ApiGuard } from "@/lib/api/api-guard";
import { HookSystem } from "@/lib/modules/hooks";
import { ResendInvitationTeamMemberAction } from "@modules/team-api/src/actions/resend-invitation-team-member";
import type { ResendInvitationDTO } from "@modules/team-api/src/sdk";
// GENERATED CODE - DO NOT MODIFY
export const POST = defineApi(
  async (context) => {
    // 1. Body Parsing (Input)
    const body = (await context.request.json()) as ResendInvitationDTO;
    const query = Object.fromEntries(new URL(context.request.url).searchParams);

    // 2. Hook: Filter Input
    const input: ResendInvitationDTO = await HookSystem.filter(
      "teamMember.resendInvitation.input",
      body,
    );

    // 3. Security Check
    // Pass merged input
    const combinedInput = { ...context.params, ...query, ...input };
    await ApiGuard.protect(context, "team-admin", combinedInput);

    // Inject userId from context for protected routes
    const user = (context as any).user;
    if (user && user.id) {
      Object.assign(combinedInput, { userId: user.id });
    }

    // 4. Action Execution
    const result = await ResendInvitationTeamMemberAction.run(
      combinedInput,
      context,
    );

    // 5. Hook: Filter Output
    const filteredResult = await HookSystem.filter(
      "teamMember.resendInvitation.output",
      result,
    );

    // 6. Response
    if (!filteredResult.success) {
      return new Response(JSON.stringify({ error: filteredResult.error }), {
        status: 400,
      });
    }

    return { success: true, data: filteredResult.data };
  },
  {
    summary: "Resend invitation email",
    tags: ["TeamMember"],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              invitationId: { type: "string" },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: { type: "object" },
          },
        },
      },
    },
  },
);
