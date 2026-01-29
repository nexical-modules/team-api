// GENERATED CODE - DO NOT MODIFY
import { defineApi } from "@/lib/api/api-docs";
import { ApiGuard } from "@/lib/api/api-guard";
import { parseQuery } from "@/lib/api/api-query";
import { z } from "zod";
import { TeamApiKeyService } from "@modules/team-api/src/services/team-api-key-service";
import { HookSystem } from "@/lib/modules/hooks";

export const GET = defineApi(
  async (context) => {
    const filterOptions = {
      fields: {
        id: "string",
        name: "string",
        hashedKey: "string",
        prefix: "string",
        lastUsedAt: "date",
        createdAt: "date",
        teamId: "string",
      },
      searchFields: ["id", "name", "hashedKey", "prefix", "teamId"],
    } as const;

    const { where, take, skip, orderBy } = parseQuery(
      new URL(context.request.url).searchParams,
      filterOptions,
    );

    // Security Check
    // Pass query params as input to role check
    await ApiGuard.protect(context, "team-owner", {
      ...context.params,
      where,
      take,
      skip,
      orderBy,
    });

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

    const actor = context.locals?.actor || (context as any).user;
    const result = await TeamApiKeyService.list(
      { where, take, skip, orderBy, select },
      actor,
    );

    if (!result.success) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 500,
      });
    }

    const data = result.data || [];
    const total = result.total || 0;

    // Analytics Hook
    await HookSystem.dispatch("teamApiKey.list.viewed", {
      count: data.length,
      actorId: actor?.id || "anonymous",
    });

    return { success: true, data, meta: { total } };
  },
  {
    summary: "List TeamApiKeys",
    tags: ["TeamApiKey"],
    parameters: [
      { name: "take", in: "query", schema: { type: "integer" } },
      { name: "skip", in: "query", schema: { type: "integer" } },
      { name: "search", in: "query", schema: { type: "string" } },
      {
        name: "orderBy",
        in: "query",
        schema: { type: "string" },
        description: "Ordering (format: field:asc or field:desc)",
      },
      {
        name: "id.eq",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by id (eq)",
      },
      {
        name: "id.ne",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by id (ne)",
      },
      {
        name: "id.contains",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by id (contains)",
      },
      {
        name: "id.startsWith",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by id (startsWith)",
      },
      {
        name: "id.endsWith",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by id (endsWith)",
      },
      {
        name: "id.in",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by id (in)",
      },
      {
        name: "id",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by id (eq)",
      },
      {
        name: "name.eq",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by name (eq)",
      },
      {
        name: "name.ne",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by name (ne)",
      },
      {
        name: "name.contains",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by name (contains)",
      },
      {
        name: "name.startsWith",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by name (startsWith)",
      },
      {
        name: "name.endsWith",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by name (endsWith)",
      },
      {
        name: "name.in",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by name (in)",
      },
      {
        name: "name",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by name (eq)",
      },
      {
        name: "hashedKey.eq",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by hashedKey (eq)",
      },
      {
        name: "hashedKey.ne",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by hashedKey (ne)",
      },
      {
        name: "hashedKey.contains",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by hashedKey (contains)",
      },
      {
        name: "hashedKey.startsWith",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by hashedKey (startsWith)",
      },
      {
        name: "hashedKey.endsWith",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by hashedKey (endsWith)",
      },
      {
        name: "hashedKey.in",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by hashedKey (in)",
      },
      {
        name: "hashedKey",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by hashedKey (eq)",
      },
      {
        name: "prefix.eq",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by prefix (eq)",
      },
      {
        name: "prefix.ne",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by prefix (ne)",
      },
      {
        name: "prefix.contains",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by prefix (contains)",
      },
      {
        name: "prefix.startsWith",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by prefix (startsWith)",
      },
      {
        name: "prefix.endsWith",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by prefix (endsWith)",
      },
      {
        name: "prefix.in",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by prefix (in)",
      },
      {
        name: "prefix",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by prefix (eq)",
      },
      {
        name: "lastUsedAt.eq",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by lastUsedAt (eq)",
      },
      {
        name: "lastUsedAt.ne",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by lastUsedAt (ne)",
      },
      {
        name: "lastUsedAt.gt",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by lastUsedAt (gt)",
      },
      {
        name: "lastUsedAt.gte",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by lastUsedAt (gte)",
      },
      {
        name: "lastUsedAt.lt",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by lastUsedAt (lt)",
      },
      {
        name: "lastUsedAt.lte",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by lastUsedAt (lte)",
      },
      {
        name: "lastUsedAt.in",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by lastUsedAt (in)",
      },
      {
        name: "lastUsedAt",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by lastUsedAt (eq)",
      },
      {
        name: "createdAt.eq",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by createdAt (eq)",
      },
      {
        name: "createdAt.ne",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by createdAt (ne)",
      },
      {
        name: "createdAt.gt",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by createdAt (gt)",
      },
      {
        name: "createdAt.gte",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by createdAt (gte)",
      },
      {
        name: "createdAt.lt",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by createdAt (lt)",
      },
      {
        name: "createdAt.lte",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by createdAt (lte)",
      },
      {
        name: "createdAt.in",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by createdAt (in)",
      },
      {
        name: "createdAt",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by createdAt (eq)",
      },
      {
        name: "teamId.eq",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by teamId (eq)",
      },
      {
        name: "teamId.ne",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by teamId (ne)",
      },
      {
        name: "teamId.contains",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by teamId (contains)",
      },
      {
        name: "teamId.startsWith",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by teamId (startsWith)",
      },
      {
        name: "teamId.endsWith",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by teamId (endsWith)",
      },
      {
        name: "teamId.in",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by teamId (in)",
      },
      {
        name: "teamId",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by teamId (eq)",
      },
      {
        name: "team.eq",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by team (eq)",
      },
      {
        name: "team.ne",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by team (ne)",
      },
      {
        name: "team.in",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by team (in)",
      },
      {
        name: "team",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by team (eq)",
      },
    ],
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                data: {
                  type: "array",
                  items: {
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
                meta: {
                  type: "object",
                  properties: {
                    total: { type: "integer" },
                  },
                },
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
    const body = await context.request.json();

    // Security Check
    await ApiGuard.protect(context, "team-owner", {
      ...context.params,
      ...body,
    });

    // Zod Validation
    const schema = z.object({
      name: z.string(),
      hashedKey: z.string(),
      prefix: z.string(),
      lastUsedAt: z.string().datetime().optional(),
      teamId: z.string(),
      team: z.string(),
    });

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

    const result = await TeamApiKeyService.create(validated, select);

    if (!result.success) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify(result.data), { status: 201 });
  },
  {
    summary: "Create TeamApiKey",
    tags: ["TeamApiKey"],
    requestBody: {
      content: {
        "application/json": {
          schema: { type: "object" },
        },
      },
    },
  },
);
