// GENERATED CODE - DO NOT MODIFY
import { defineApi } from '@/lib/api/api-docs';
import { ApiGuard } from '@/lib/api/api-guard';
import { z } from 'zod';
import { TeamService } from '@modules/team-api/src/services/team-service';
export const GET = defineApi(
  async (context, actor) => {
    const { id } = context.params;

    // Security Check
    await ApiGuard.protect(context, 'team-member', { ...context.params });

    const select = {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
      members: { take: 10 },
      invitations: { take: 10 },
      apiKeys: { take: 10 },
    };

    const result = await TeamService.get(id, select, actor);

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
        JSON.stringify({ error: { code: 'NOT_FOUND', message: 'Team not found' } }),
        { status: 404 },
      );
    }

    return { success: true, data: result.data };
  },
  {
    summary: 'Get Team',
    tags: ['Team'],
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
                name: { type: 'string' },
                createdAt: { type: 'string', format: 'date-time' },
                updatedAt: { type: 'string', format: 'date-time' },
                members: { type: 'array', items: { type: 'string' } },
                invitations: { type: 'array', items: { type: 'string' } },
                apiKeys: { type: 'array', items: { type: 'string' } },
              },
              required: ['name', 'updatedAt', 'members', 'invitations', 'apiKeys'],
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
    await ApiGuard.protect(context, 'team-admin', { ...context.params, ...body });

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

    const result = await TeamService.update(id, validated, select, actor);

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
    summary: 'Update Team',
    tags: ['Team'],
    parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
              createdAt: { type: 'string', format: 'date-time' },
              updatedAt: { type: 'string', format: 'date-time' },
              members: { type: 'array', items: { type: 'string' } },
              invitations: { type: 'array', items: { type: 'string' } },
              apiKeys: { type: 'array', items: { type: 'string' } },
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
                name: { type: 'string' },
                createdAt: { type: 'string', format: 'date-time' },
                updatedAt: { type: 'string', format: 'date-time' },
                members: { type: 'array', items: { type: 'string' } },
                invitations: { type: 'array', items: { type: 'string' } },
                apiKeys: { type: 'array', items: { type: 'string' } },
              },
              required: ['name', 'updatedAt', 'members', 'invitations', 'apiKeys'],
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
    await ApiGuard.protect(context, 'team-owner', { ...context.params });

    const result = await TeamService.delete(id, actor);

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
    summary: 'Delete Team',
    tags: ['Team'],
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
