// GENERATED CODE - DO NOT MODIFY
import { defineApi } from "@/lib/api/api-docs";
import { ApiGuard } from "@/lib/api/api-guard";
import { parseQuery } from "@/lib/api/api-query";
import { HookSystem } from "@/lib/modules/hooks";
import { z } from "zod";
import { InvitationService } from "@modules/team-api/src/services/invitation-service";
import { TeamRole } from "@modules/team-api/src/sdk";

// GENERATED CODE - DO NOT MODIFY
export const GET = defineApi(
  async (context) => {
    const filterOptions = {
      fields: {
        id: "string",
        email: "string",
        teamRole: "enum",
        teamId: "string",
        inviterId: "string",
        token: "string",
        expires: "date",
        createdAt: "date",
        updatedAt: "date",
      },
      searchFields: ["id", "email", "teamId", "inviterId", "token"],
    } as const;

    const { where, take, skip, orderBy } = parseQuery(
      new URL(context.request.url).searchParams,
      filterOptions,
    );

    // Security Check
    // Pass query params as input to role check
    await ApiGuard.protect(context, "team-admin", {
      ...context.params,
      where,
      take,
      skip,
      orderBy,
    });

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
    const result = await InvitationService.list(
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
    await HookSystem.dispatch("invitation.list.viewed", {
      count: data.length,
      actorId: actor?.id || "anonymous",
    });

    return { success: true, data, meta: { total } };
  },
  {
    summary: "List Invitations",
    tags: ["Invitation"],
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
        name: "email.eq",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by email (eq)",
      },
      {
        name: "email.ne",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by email (ne)",
      },
      {
        name: "email.contains",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by email (contains)",
      },
      {
        name: "email.startsWith",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by email (startsWith)",
      },
      {
        name: "email.endsWith",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by email (endsWith)",
      },
      {
        name: "email.in",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by email (in)",
      },
      {
        name: "email",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by email (eq)",
      },
      {
        name: "teamRole.eq",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by teamRole (eq)",
      },
      {
        name: "teamRole.ne",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by teamRole (ne)",
      },
      {
        name: "teamRole.in",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by teamRole (in)",
      },
      {
        name: "teamRole",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by teamRole (eq)",
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
      {
        name: "inviterId.eq",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by inviterId (eq)",
      },
      {
        name: "inviterId.ne",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by inviterId (ne)",
      },
      {
        name: "inviterId.contains",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by inviterId (contains)",
      },
      {
        name: "inviterId.startsWith",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by inviterId (startsWith)",
      },
      {
        name: "inviterId.endsWith",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by inviterId (endsWith)",
      },
      {
        name: "inviterId.in",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by inviterId (in)",
      },
      {
        name: "inviterId",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by inviterId (eq)",
      },
      {
        name: "inviter.eq",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by inviter (eq)",
      },
      {
        name: "inviter.ne",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by inviter (ne)",
      },
      {
        name: "inviter.in",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by inviter (in)",
      },
      {
        name: "inviter",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by inviter (eq)",
      },
      {
        name: "token.eq",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by token (eq)",
      },
      {
        name: "token.ne",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by token (ne)",
      },
      {
        name: "token.contains",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by token (contains)",
      },
      {
        name: "token.startsWith",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by token (startsWith)",
      },
      {
        name: "token.endsWith",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by token (endsWith)",
      },
      {
        name: "token.in",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by token (in)",
      },
      {
        name: "token",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by token (eq)",
      },
      {
        name: "expires.eq",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by expires (eq)",
      },
      {
        name: "expires.ne",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by expires (ne)",
      },
      {
        name: "expires.gt",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by expires (gt)",
      },
      {
        name: "expires.gte",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by expires (gte)",
      },
      {
        name: "expires.lt",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by expires (lt)",
      },
      {
        name: "expires.lte",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by expires (lte)",
      },
      {
        name: "expires.in",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by expires (in)",
      },
      {
        name: "expires",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by expires (eq)",
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
        name: "updatedAt.eq",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by updatedAt (eq)",
      },
      {
        name: "updatedAt.ne",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by updatedAt (ne)",
      },
      {
        name: "updatedAt.gt",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by updatedAt (gt)",
      },
      {
        name: "updatedAt.gte",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by updatedAt (gte)",
      },
      {
        name: "updatedAt.lt",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by updatedAt (lt)",
      },
      {
        name: "updatedAt.lte",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by updatedAt (lte)",
      },
      {
        name: "updatedAt.in",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by updatedAt (in)",
      },
      {
        name: "updatedAt",
        in: "query",
        schema: { type: "string" },
        required: false,
        description: "Filter by updatedAt (eq)",
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
