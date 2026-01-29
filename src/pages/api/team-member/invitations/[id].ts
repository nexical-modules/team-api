// GENERATED CODE - DO NOT MODIFY
import { defineApi } from "@/lib/api/api-docs";
import { ApiGuard } from "@/lib/api/api-guard";
import { HookSystem } from "@/lib/modules/hooks";
import { DeleteInvitationTeamMemberAction } from "@modules/team-api/src/actions/delete-invitation-team-member";

// GENERATED CODE - DO NOT MODIFY
export const DELETE = defineApi(
  async (context) => {
    // 1. Body Parsing (Input)
    const body = (await context.request.json()) as any;
    const query = Object.fromEntries(new URL(context.request.url).searchParams);

    // 2. Hook: Filter Input
    const input: any = await HookSystem.filter(
      "teamMember.deleteInvitation.input",
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
    const result = await DeleteInvitationTeamMemberAction.run(
      combinedInput,
      context,
    );

    // 5. Hook: Filter Output
    const filteredResult = await HookSystem.filter(
      "teamMember.deleteInvitation.output",
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
    summary: "Cancel/Delete an invitation",
    tags: ["TeamMember"],
    requestBody: {
      content: {
        "application/json": {
          schema: { type: "object" },
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
