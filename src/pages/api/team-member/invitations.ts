// GENERATED CODE - DO NOT MODIFY
import { defineApi } from "@/lib/api/api-docs";
import { ApiGuard } from "@/lib/api/api-guard";
import { HookSystem } from "@/lib/modules/hooks";
import { ListInvitationsTeamMemberAction } from "@modules/team-api/src/actions/list-invitations-team-member";
import type {
  ListInvitationsDTO,
  InviteTeamMemberDTO,
} from "@modules/team-api/src/sdk";
import { InviteTeamMemberAction } from "@modules/team-api/src/actions/invite-team-member";
// GENERATED CODE - DO NOT MODIFY
export const GET = defineApi(
  async (context) => {
    // 1. Body Parsing (Input)
    const body = {} as ListInvitationsDTO;
    const query = Object.fromEntries(new URL(context.request.url).searchParams);

    // 2. Hook: Filter Input
    const input: ListInvitationsDTO = await HookSystem.filter(
      "teamMember.listInvitations.input",
      body,
    );

    // 3. Security Check
    // Pass merged input
    const combinedInput = { ...context.params, ...query, ...input };
    await ApiGuard.protect(context, "member", combinedInput);

    // Inject userId from context for protected routes
    const user = (context as any).user;
    if (user && user.id) {
      Object.assign(combinedInput, { userId: user.id });
    }

    // 4. Action Execution
    const result = await ListInvitationsTeamMemberAction.run(
      combinedInput,
      context,
    );

    // 5. Hook: Filter Output
    const filteredResult = await HookSystem.filter(
      "teamMember.listInvitations.output",
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
    summary: "List team invitations",
    tags: ["TeamMember"],

    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  email: { type: "string" },
                  teamRole: { type: "string" },
                  teamId: { type: "string" },
                  team: { type: "string" },
                  inviterId: { type: "string" },
                  inviter: { type: "string" },
                  token: { type: "string" },
                  expires: { type: "string", format: "date-time" },
                  createdAt: { type: "string", format: "date-time" },
                  updatedAt: { type: "string", format: "date-time" },
                },
                required: ["email", "token", "expires", "updatedAt"],
              },
            },
          },
        },
      },
    },
  },
);
export const POST = defineApi(
  async (context) => {
    // 1. Body Parsing (Input)
    const body = (await context.request.json()) as InviteTeamMemberDTO;
    const query = Object.fromEntries(new URL(context.request.url).searchParams);

    // 2. Hook: Filter Input
    const input: InviteTeamMemberDTO = await HookSystem.filter(
      "teamMember.inviteMember.input",
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
    const result = await InviteTeamMemberAction.run(combinedInput, context);

    // 5. Hook: Filter Output
    const filteredResult = await HookSystem.filter(
      "teamMember.inviteMember.output",
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
    summary: "Invite a new team member",
    tags: ["TeamMember"],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              teamId: { type: "string" },
              email: { type: "string" },
              role: { type: "string" },
            },
            required: ["teamId", "email"],
          },
        },
      },
    },
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                id: { type: "string" },
                email: { type: "string" },
                teamRole: { type: "string" },
                teamId: { type: "string" },
                team: { type: "string" },
                inviterId: { type: "string" },
                inviter: { type: "string" },
                token: { type: "string" },
                expires: { type: "string", format: "date-time" },
                createdAt: { type: "string", format: "date-time" },
                updatedAt: { type: "string", format: "date-time" },
              },
              required: ["email", "token", "expires", "updatedAt"],
            },
          },
        },
      },
    },
  },
);
