// GENERATED CODE - DO NOT MODIFY
import { TeamModuleTypes } from '@/lib/api';
import { defineApi } from '@/lib/api/api-docs';
import { ApiGuard } from '@/lib/api/api-guard';
import { InvitationService } from '@modules/team-api/src/services/invitation-service';
import { z } from 'zod';

export const GET = defineApi(
  async (context, actor) => {
    const { id } = context.params;

    // Security Check
    await ApiGuard.protect(context, 'TEAM_MEMBER', { ...context.params });

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
      throw new Error(result.error || 'Internal Server Error');
    }

    if (!result.data) {
      throw new Error('Invitation not found');
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
    await ApiGuard.protect(context, 'TEAM_ADMIN', { ...context.params, ...body });

    // Zod Validation
    const schema = z.object({
      id: z.string().optional(),
      email: z.string(),
      teamRole: z.nativeEnum(TeamModuleTypes.TeamRole).optional(),
      teamId: z.string().optional(),
      inviterId: z.string().optional(),
      token: z.string(),
      expires: z.string().datetime(),
    });
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
      throw new Error(result.error || 'Internal Server Error');
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
    await ApiGuard.protect(context, 'TEAM_ADMIN', { ...context.params });

    const result = await InvitationService.delete(id, actor);

    if (!result.success) {
      throw new Error(result.error || 'Internal Server Error');
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
