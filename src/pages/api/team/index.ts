// GENERATED CODE - DO NOT MODIFY
import { defineApi } from '@/lib/api/api-docs';
import { ApiGuard } from '@/lib/api/api-guard';
import { parseQuery } from '@/lib/api/api-query';

import { HookSystem } from '@/lib/modules/hooks';
import { TeamService } from '@modules/team-api/src/services/team-service';

export const GET = defineApi(
  async (context, actor) => {
    const filterOptions = {
      fields: {
        id: 'string',
        name: 'string',
        createdAt: 'date',
        updatedAt: 'date',
      },
      searchFields: ['id', 'name'],
    } as const;

    const { where, take, skip, orderBy } = parseQuery(
      new URL(context.request.url).searchParams,
      filterOptions,
    );

    // Security Check
    // Pass query params as input to role check
    await ApiGuard.protect(context, 'team-member', {
      ...context.params,
      where,
      take,
      skip,
      orderBy,
    });

    const select = {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
      members: { take: 10 },
      invitations: { take: 10 },
      apiKeys: { take: 10 },
    };

    const result = await TeamService.list({ where, take, skip, orderBy, select }, actor);

    if (!result.success) {
      return new Response(JSON.stringify({ error: result.error }), { status: 500 });
    }

    const data = result.data || [];
    const total = result.total || 0;

    // Analytics Hook
    await HookSystem.dispatch('team.list.viewed', {
      count: data.length,
      actorId: actor?.id || 'anonymous',
    });

    return { success: true, data, meta: { total } };
  },
  {
    summary: 'List Teams',
    tags: ['Team'],
    parameters: [
      { name: 'take', in: 'query', schema: { type: 'integer' } },
      { name: 'skip', in: 'query', schema: { type: 'integer' } },
      { name: 'search', in: 'query', schema: { type: 'string' } },
      {
        name: 'orderBy',
        in: 'query',
        schema: { type: 'string' },
        description: 'Ordering (format: field:asc or field:desc)',
      },
      {
        name: 'id.eq',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by id (eq)',
      },
      {
        name: 'id.ne',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by id (ne)',
      },
      {
        name: 'id.contains',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by id (contains)',
      },
      {
        name: 'id.startsWith',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by id (startsWith)',
      },
      {
        name: 'id.endsWith',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by id (endsWith)',
      },
      {
        name: 'id.in',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by id (in)',
      },
      {
        name: 'id',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by id (eq)',
      },
      {
        name: 'name.eq',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by name (eq)',
      },
      {
        name: 'name.ne',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by name (ne)',
      },
      {
        name: 'name.contains',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by name (contains)',
      },
      {
        name: 'name.startsWith',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by name (startsWith)',
      },
      {
        name: 'name.endsWith',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by name (endsWith)',
      },
      {
        name: 'name.in',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by name (in)',
      },
      {
        name: 'name',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by name (eq)',
      },
      {
        name: 'createdAt.eq',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by createdAt (eq)',
      },
      {
        name: 'createdAt.ne',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by createdAt (ne)',
      },
      {
        name: 'createdAt.gt',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by createdAt (gt)',
      },
      {
        name: 'createdAt.gte',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by createdAt (gte)',
      },
      {
        name: 'createdAt.lt',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by createdAt (lt)',
      },
      {
        name: 'createdAt.lte',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by createdAt (lte)',
      },
      {
        name: 'createdAt.in',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by createdAt (in)',
      },
      {
        name: 'createdAt',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by createdAt (eq)',
      },
      {
        name: 'updatedAt.eq',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by updatedAt (eq)',
      },
      {
        name: 'updatedAt.ne',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by updatedAt (ne)',
      },
      {
        name: 'updatedAt.gt',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by updatedAt (gt)',
      },
      {
        name: 'updatedAt.gte',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by updatedAt (gte)',
      },
      {
        name: 'updatedAt.lt',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by updatedAt (lt)',
      },
      {
        name: 'updatedAt.lte',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by updatedAt (lte)',
      },
      {
        name: 'updatedAt.in',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by updatedAt (in)',
      },
      {
        name: 'updatedAt',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by updatedAt (eq)',
      },
      {
        name: 'members.eq',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by members (eq)',
      },
      {
        name: 'members.ne',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by members (ne)',
      },
      {
        name: 'members.in',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by members (in)',
      },
      {
        name: 'members',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by members (eq)',
      },
      {
        name: 'invitations.eq',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by invitations (eq)',
      },
      {
        name: 'invitations.ne',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by invitations (ne)',
      },
      {
        name: 'invitations.in',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by invitations (in)',
      },
      {
        name: 'invitations',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by invitations (eq)',
      },
      {
        name: 'apiKeys.eq',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by apiKeys (eq)',
      },
      {
        name: 'apiKeys.ne',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by apiKeys (ne)',
      },
      {
        name: 'apiKeys.in',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by apiKeys (in)',
      },
      {
        name: 'apiKeys',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by apiKeys (eq)',
      },
    ],
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                data: {
                  type: 'array',
                  items: {
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
                meta: {
                  type: 'object',
                  properties: {
                    total: { type: 'integer' },
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
