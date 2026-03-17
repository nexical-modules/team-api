// GENERATED CODE - DO NOT MODIFY
import { defineApi } from '@/lib/api/api-docs';
import { ApiGuard } from '@/lib/api/api-guard';
import { TeamApiKeyService } from '@modules/team-api/src/services/team-api-key-service';

export const GET = defineApi(
  async (context, actor) => {
    const { id } = context.params;

    // Security Check
    await ApiGuard.protect(context, 'TEAM_OWNER', { ...context.params });

    const select = {
      id: true,
      name: true,
      hashedKey: true,
      prefix: true,
      lastUsedAt: true,
      expiresAt: true,
      createdAt: true,
      teamId: true,
      team: true,
    };
    const result = await TeamApiKeyService.get(id, select, actor);

    if (!result.success) {
      throw new Error(result.error || 'Internal Server Error');
    }

    if (!result.data) {
      throw new Error('TeamApiKey not found');
    }

    return { success: true, data: result.data };
  },
  {
    summary: 'Get TeamApiKey',
    tags: ['TeamApiKey'],
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
                hashedKey: { type: 'string' },
                prefix: { type: 'string' },
                lastUsedAt: { type: 'string', format: 'date-time' },
                expiresAt: { type: 'string', format: 'date-time' },
                createdAt: { type: 'string', format: 'date-time' },
                teamId: { type: 'string' },
                team: { type: 'string' },
              },
              required: ['name', 'hashedKey', 'prefix', 'teamId', 'team'],
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
    await ApiGuard.protect(context, 'TEAM_OWNER', { ...context.params });

    const result = await TeamApiKeyService.delete(id, actor);

    if (!result.success) {
      throw new Error(result.error || 'Internal Server Error');
    }

    return { success: true };
  },
  {
    summary: 'Delete TeamApiKey',
    tags: ['TeamApiKey'],
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
