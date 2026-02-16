// GENERATED CODE - DO NOT MODIFY
import { defineApi } from '@/lib/api/api-docs';
import { ApiGuard } from '@/lib/api/api-guard';
import { z } from 'zod';
import { InvitationService } from '@modules/team-api/src/services/invitation-service';
import type { TeamApiModuleTypes } from '@/lib/api';

export const GET = defineApi(
  async (context, actor) => {
    const { id } = context.params;

    // Security Check
    await ApiGuard.protect(context, 'member', { ...context.params });

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

    const result = await InvitationService.get(id, select, actor);

    if (!result.success) {
      if (
        result.error?.code === 'NOT_FOUND' ||
        (typeof result.error === 'string' && result.error.includes('not_found'))
      ) {
        return new Response(JSON.stringify({ error: result.error }), { status: 404 });
      }
      return new Response(JSON.stringify({ error: result.error }), { status: 500 });
    }

    if (!result.data) {
      return new Response(
        JSON.stringify({ error: { code: 'NOT_FOUND', message: 'Invitation not found' } }),
        { status: 404 },
      );
    }

    return { success: true, data: result.data };
  },
  {
    summary: 'Get Invitation',
    tags: ['Invitation'],
    parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                email: { type: 'string' },
                teamRole: { type: 'string' },
                teamId: { type: 'string' },
                team: { type: 'string' },
                inviterId: { type: 'string' },
                inviter: { type: 'string' },
                token: { type: 'string' },
                expires: { type: 'string', format: 'date-time' },
                createdAt: { type: 'string', format: 'date-time' },
                updatedAt: { type: 'string', format: 'date-time' },
              },
              required: ['email', 'token', 'expires', 'updatedAt'],
            },
          },
        },
      },
    },
  },
);
export const PUT = defineApi(
  async (context, actor) => {
    const { id } = context.params;
    const body = await context.request.json();

    // Security Check
    await ApiGuard.protect(context, 'member', { ...context.params, ...body });

    // Zod Validation
    const schema = z
      .object({
        email: z.string(),
        teamRole: z.nativeEnum(TeamApiModuleTypes.TeamRole).optional(),
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

    const result = await InvitationService.update(id, validated, select, actor);

    if (!result.success) {
      if (
        result.error?.code === 'NOT_FOUND' ||
        (typeof result.error === 'string' && result.error.includes('not_found'))
      ) {
        return new Response(JSON.stringify({ error: result.error }), { status: 404 });
      }
      return new Response(JSON.stringify({ error: result.error }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true, data: result.data }), { status: 200 });
  },
  {
    summary: 'Update Invitation',
    tags: ['Invitation'],
    parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              email: { type: 'string' },
              teamRole: { type: 'string' },
              teamId: { type: 'string' },
              team: { type: 'string' },
              inviterId: { type: 'string' },
              inviter: { type: 'string' },
              token: { type: 'string' },
              expires: { type: 'string', format: 'date-time' },
              createdAt: { type: 'string', format: 'date-time' },
              updatedAt: { type: 'string', format: 'date-time' },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                email: { type: 'string' },
                teamRole: { type: 'string' },
                teamId: { type: 'string' },
                team: { type: 'string' },
                inviterId: { type: 'string' },
                inviter: { type: 'string' },
                token: { type: 'string' },
                expires: { type: 'string', format: 'date-time' },
                createdAt: { type: 'string', format: 'date-time' },
                updatedAt: { type: 'string', format: 'date-time' },
              },
              required: ['email', 'token', 'expires', 'updatedAt'],
            },
          },
        },
      },
    },
  },
);
export const DELETE = defineApi(
  async (context, actor) => {
    const { id } = context.params;

    // Security Check
    await ApiGuard.protect(context, 'team-admin', { ...context.params });

    const result = await InvitationService.delete(id, actor);

    if (!result.success) {
      if (
        result.error?.code === 'NOT_FOUND' ||
        (typeof result.error === 'string' && result.error.includes('not_found'))
      ) {
        return new Response(JSON.stringify({ error: result.error }), { status: 404 });
      }
      return new Response(JSON.stringify({ error: result.error }), { status: 500 });
    }

    return { success: true };
  },
  {
    summary: 'Delete Invitation',
    tags: ['Invitation'],
    parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean' },
              },
            },
          },
        },
      },
    },
  },
);
