// GENERATED CODE - DO NOT MODIFY
import { defineApi } from "@/lib/api/api-docs";
import { ApiGuard } from "@/lib/api/api-guard";
import { z } from "zod";
import { TeamService } from "@modules/team-api/src/services/team-service";
import { HookSystem } from "@/lib/modules/hooks";

export const GET = defineApi(
  async (context) => {
    const { id } = context.params;
    if (!id) return new Response(null, { status: 404 });

    // Pre-check
    await ApiGuard.protect(context, "team-member", { ...context.params });

    const select = {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
      members: { take: 10 },
      invitations: { take: 10 },
      apiKeys: { take: 10 },
    };
    const result = await TeamService.get(id, select);

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
    await HookSystem.dispatch("team.viewed", {
      id,
      actorId: actor?.id || "anonymous",
    });

    return { success: true, data: result.data };
  },
  {
    summary: "Get Team",
    tags: ["Team"],
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
                name: { type: "string" },
                createdAt: { type: "string", format: "date-time" },
                updatedAt: { type: "string", format: "date-time" },
                members: { type: "array", items: { type: "string" } },
                invitations: { type: "array", items: { type: "string" } },
                apiKeys: { type: "array", items: { type: "string" } },
              },
              required: [
                "name",
                "updatedAt",
                "members",
                "invitations",
                "apiKeys",
              ],
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
    await ApiGuard.protect(context, "team-admin", {
      ...context.params,
      ...body,
    });

    // Fetch for Post-check ownership
    const existing = await TeamService.get(id);
    if (!existing.success || !existing.data) {
      return new Response(null, { status: 404 });
    }

    // Post-check
    await ApiGuard.protect(
      context,
      "team-admin",
      { ...context.params, ...body },
      existing.data,
    );

    // Zod Validation
    const schema = z
      .object({
        name: z.string(),
      })
      .partial();
    const validated = schema.parse(body);
    const select = {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
      members: { take: 10 },
      invitations: { take: 10 },
      apiKeys: { take: 10 },
    };
    const actor = context.locals?.actor || (context as any).user;

    const result = await TeamService.update(id, validated, select, actor);

    if (!result.success) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 400,
      });
    }

    return { success: true, data: result.data };
  },
  {
    summary: "Update Team",
    tags: ["Team"],
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
              name: { type: "string" },
              createdAt: { type: "string", format: "date-time" },
              updatedAt: { type: "string", format: "date-time" },
              members: { type: "array", items: { type: "string" } },
              invitations: { type: "array", items: { type: "string" } },
              apiKeys: { type: "array", items: { type: "string" } },
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
                name: { type: "string" },
                createdAt: { type: "string", format: "date-time" },
                updatedAt: { type: "string", format: "date-time" },
                members: { type: "array", items: { type: "string" } },
                invitations: { type: "array", items: { type: "string" } },
                apiKeys: { type: "array", items: { type: "string" } },
              },
              required: [
                "name",
                "updatedAt",
                "members",
                "invitations",
                "apiKeys",
              ],
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
    const existing = await TeamService.get(id);
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

    const result = await TeamService.delete(id);

    if (!result.success) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 400,
      });
    }

    return { success: true };
  },
  {
    summary: "Delete Team",
    tags: ["Team"],
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
