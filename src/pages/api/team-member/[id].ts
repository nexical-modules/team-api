// GENERATED CODE - DO NOT MODIFY
import { defineApi } from "@/lib/api/api-docs";
import { ApiGuard } from "@/lib/api/api-guard";
import { z } from "zod";
import { TeamMemberService } from "@modules/team-api/src/services/team-member-service";
import { TeamRole } from "@modules/team-api/src/sdk";
import { HookSystem } from "@/lib/modules/hooks";
// GENERATED CODE - DO NOT MODIFY
export const GET = defineApi(
  async (context) => {
    const { id } = context.params;
    if (!id) return new Response(null, { status: 404 });

    // Pre-check
    await ApiGuard.protect(context, "team-member", { ...context.params });

    const select = {
      id: true,
      role: true,
      userId: true,
      teamId: true,
      user: {
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
      team: true,
      createdAt: true,
      updatedAt: true,
    };
    const result = await TeamMemberService.get(id, select);

    if (!result.success || !result.data) {
      return new Response(null, { status: 404 });
    }

    // Post-check (Data ownership)
    await ApiGuard.protect(
      context,
      "team-member",
      { ...context.params },
      result.data,
    );

    // Analytics Hook
    const actor = (context as any).user;
    await HookSystem.dispatch("teamMember.viewed", {
      id,
      actorId: actor?.id || "anonymous",
    });

    return { success: true, data: result.data };
  },
  {
    summary: "Get TeamMember",
    tags: ["TeamMember"],
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
                role: { type: "string" },
                userId: { type: "string" },
                teamId: { type: "string" },
                user: { type: "string" },
                team: { type: "string" },
                createdAt: { type: "string", format: "date-time" },
                updatedAt: { type: "string", format: "date-time" },
              },
              required: ["userId", "teamId", "user", "team", "updatedAt"],
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
    await ApiGuard.protect(context, "team-owner", {
      ...context.params,
      ...body,
    });

    // Fetch for Post-check ownership
    const existing = await TeamMemberService.get(id);
    if (!existing.success || !existing.data) {
      return new Response(null, { status: 404 });
    }

    // Post-check
    await ApiGuard.protect(
      context,
      "team-owner",
      { ...context.params, ...body },
      existing.data,
    );

    // Zod Validation
    const schema = z
      .object({
        role: z.nativeEnum(TeamRole).optional(),
        userId: z.string(),
        teamId: z.string(),
      })
      .partial();
    const validated = schema.parse(body);
    const select = {
      id: true,
      role: true,
      userId: true,
      teamId: true,
      user: {
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
      team: true,
      createdAt: true,
      updatedAt: true,
    };
    const actor = context.locals?.actor || (context as any).user;

    const result = await TeamMemberService.update(id, validated, select, actor);

    if (!result.success) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 400,
      });
    }

    return { success: true, data: result.data };
  },
  {
    summary: "Update TeamMember",
    tags: ["TeamMember"],
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
              role: { type: "string" },
              userId: { type: "string" },
              teamId: { type: "string" },
              user: { type: "string" },
              team: { type: "string" },
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
                role: { type: "string" },
                userId: { type: "string" },
                teamId: { type: "string" },
                user: { type: "string" },
                team: { type: "string" },
                createdAt: { type: "string", format: "date-time" },
                updatedAt: { type: "string", format: "date-time" },
              },
              required: ["userId", "teamId", "user", "team", "updatedAt"],
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
    await ApiGuard.protect(context, "team-owner", { ...context.params });

    // Fetch for Post-check ownership
    const existing = await TeamMemberService.get(id);
    if (!existing.success || !existing.data) {
      return new Response(null, { status: 404 });
    }

    // Post-check
    await ApiGuard.protect(
      context,
      "team-owner",
      { ...context.params },
      existing.data,
    );

    const result = await TeamMemberService.delete(id);

    if (!result.success) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 400,
      });
    }

    return { success: true };
  },
  {
    summary: "Delete TeamMember",
    tags: ["TeamMember"],
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
