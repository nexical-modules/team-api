// GENERATED CODE - DO NOT MODIFY
import { defineApi } from "@/lib/api/api-docs";
import { ApiGuard } from "@/lib/api/api-guard";
import { HookSystem } from "@/lib/modules/hooks";
import { z } from "zod";
import { InvitationService } from "@modules/team-api/src/services/invitation-service";
import { TeamRole } from "@modules/team-api/src/sdk";

// GENERATED CODE - DO NOT MODIFY
export const GET = defineApi(
  async (context) => {
    const { id } = context.params;
    if (!id) return new Response(null, { status: 404 });

    // Pre-check
    await ApiGuard.protect(context, "member", { ...context.params });

    const select = {
      id: true,
      email: true,
      teamRole: true,
      teamId: true,
      team: true,
      inviterId: true,
      inviter: {
        select: {
          id: true,
          name: true,
          email: true,
          username: true,
          image: true,
          memberships: true,
          sentInvitations: true,
        },
      },
      token: true,
      expires: true,
      createdAt: true,
      updatedAt: true,
    };
    const result = await InvitationService.get(id, select);

    if (!result.success || !result.data) {
      return new Response(null, { status: 404 });
    }

    // Post-check (Data ownership)
    await ApiGuard.protect(
      context,
      "member",
      { ...context.params },
      result.data,
    );

    // Analytics Hook
    const actor = (context as any).user;
    await HookSystem.dispatch("invitation.viewed", {
      id,
      actorId: actor?.id || "anonymous",
    });

    return { success: true, data: result.data };
  },
  {
    summary: "Get Invitation",
    tags: ["Invitation"],
    parameters: [
      { name: "id", in: "path", required: true, schema: { type: "string" } },
    ],
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
export const PUT = defineApi(
  async (context) => {
    const { id } = context.params;
    if (!id) return new Response(null, { status: 404 });

    const body = await context.request.json();

    // Pre-check
    await ApiGuard.protect(context, "member", { ...context.params, ...body });

    // Fetch for Post-check ownership
    const existing = await InvitationService.get(id);
    if (!existing.success || !existing.data) {
      return new Response(null, { status: 404 });
    }

    // Post-check
    await ApiGuard.protect(
      context,
      "member",
      { ...context.params, ...body },
      existing.data,
    );

    // Zod Validation
    const schema = z
      .object({
        email: z.string(),
        teamRole: z.nativeEnum(TeamRole).optional(),
        teamId: z.string().optional(),
        inviterId: z.string().optional(),
        token: z.string(),
        expires: z.string().datetime(),
      })
      .partial();
    const validated = schema.parse(body);
    const select = {
      id: true,
      email: true,
      teamRole: true,
      teamId: true,
      team: true,
      inviterId: true,
      inviter: {
        select: {
          id: true,
          name: true,
          email: true,
          username: true,
          image: true,
          memberships: true,
          sentInvitations: true,
        },
      },
      token: true,
      expires: true,
      createdAt: true,
      updatedAt: true,
    };
    const actor = context.locals?.actor || (context as any).user;

    const result = await InvitationService.update(id, validated, select, actor);

    if (!result.success) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 400,
      });
    }

    return { success: true, data: result.data };
  },
  {
    summary: "Update Invitation",
    tags: ["Invitation"],
    parameters: [
      { name: "id", in: "path", required: true, schema: { type: "string" } },
    ],
    requestBody: {
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
export const DELETE = defineApi(
  async (context) => {
    const { id } = context.params;
    if (!id) return new Response(null, { status: 404 });

    // Pre-check
    await ApiGuard.protect(context, "team-admin", { ...context.params });

    // Fetch for Post-check ownership
    const existing = await InvitationService.get(id);
    if (!existing.success || !existing.data) {
      return new Response(null, { status: 404 });
    }

    // Post-check
    await ApiGuard.protect(
      context,
      "team-admin",
      { ...context.params },
      existing.data,
    );

    const result = await InvitationService.delete(id);

    if (!result.success) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 400,
      });
    }

    return { success: true };
  },
  {
    summary: "Delete Invitation",
    tags: ["Invitation"],
    parameters: [
      { name: "id", in: "path", required: true, schema: { type: "string" } },
    ],
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                success: { type: "boolean" },
              },
            },
          },
        },
      },
    },
  },
);
