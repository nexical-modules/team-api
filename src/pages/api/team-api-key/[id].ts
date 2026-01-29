// GENERATED CODE - DO NOT MODIFY
import { defineApi } from "@/lib/api/api-docs";
import { ApiGuard } from "@/lib/api/api-guard";
import { z } from "zod";
import { TeamApiKeyService } from "@modules/team-api/src/services/team-api-key-service";
import { HookSystem } from "@/lib/modules/hooks";

export const GET = defineApi(
  async (context) => {
    const { id } = context.params;
    if (!id) return new Response(null, { status: 404 });

    // Pre-check
    await ApiGuard.protect(context, "team-owner", { ...context.params });

    const select = {
      id: true,
      name: true,
      hashedKey: true,
      prefix: true,
      lastUsedAt: true,
      createdAt: true,
      teamId: true,
      team: true,
    };
    const result = await TeamApiKeyService.get(id, select);

    if (!result.success || !result.data) {
      return new Response(null, { status: 404 });
    }

    // Post-check (Data ownership)
    await ApiGuard.protect(
      context,
      "team-owner",
      { ...context.params },
      result.data,
    );

    // Analytics Hook
    const actor = (context as any).user;
    await HookSystem.dispatch("teamApiKey.viewed", {
      id,
      actorId: actor?.id || "anonymous",
    });

    return { success: true, data: result.data };
  },
  {
    summary: "Get TeamApiKey",
    tags: ["TeamApiKey"],
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
                hashedKey: { type: "string" },
                prefix: { type: "string" },
                lastUsedAt: { type: "string", format: "date-time" },
                createdAt: { type: "string", format: "date-time" },
                teamId: { type: "string" },
                team: { type: "string" },
              },
              required: ["name", "hashedKey", "prefix", "teamId", "team"],
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
    const existing = await TeamApiKeyService.get(id);
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
        name: z.string(),
        hashedKey: z.string(),
        prefix: z.string(),
        lastUsedAt: z.string().datetime().optional(),
        teamId: z.string(),
        team: z.string(),
      })
      .partial();
    const validated = schema.parse(body);
    const select = {
      id: true,
      name: true,
      hashedKey: true,
      prefix: true,
      lastUsedAt: true,
      createdAt: true,
      teamId: true,
      team: true,
    };

    const result = await TeamApiKeyService.update(id, validated, select);

    if (!result.success) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 400,
      });
    }

    return result.data;
  },
  {
    summary: "Update TeamApiKey",
    tags: ["TeamApiKey"],
    parameters: [
      { name: "id", in: "path", required: true, schema: { type: "string" } },
    ],
  },
);
export const DELETE = defineApi(
  async (context) => {
    const { id } = context.params;
    if (!id) return new Response(null, { status: 404 });

    // Pre-check
    await ApiGuard.protect(context, "team-owner", { ...context.params });

    // Fetch for Post-check ownership
    const existing = await TeamApiKeyService.get(id);
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

    const result = await TeamApiKeyService.delete(id);

    if (!result.success) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 400,
      });
    }

    return { success: true };
  },
  {
    summary: "Delete TeamApiKey",
    tags: ["TeamApiKey"],
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
