// GENERATED CODE - DO NOT MODIFY
import { defineApi } from '@/lib/api/api-docs';
import { ApiGuard } from '@/lib/api/api-guard';
import { parseQuery } from '@/lib/api/api-query';
import { z } from 'zod';
import { TeamMemberService } from '@modules/team-api/src/services/team-member-service';
import { HookSystem } from '@/lib/modules/hooks';
import type { TeamApiModuleTypes } from '@/lib/api';

export const GET = defineApi(
  async (context, actor) => {
    const filterOptions = {
      fields: {
        id: 'string',
        role: 'enum',
        userId: 'string',
        teamId: 'string',
        createdAt: 'date',
        updatedAt: 'date',
      },
      searchFields: ['id', 'userId', 'teamId'],
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

    const result = await TeamMemberService.list({ where, take, skip, orderBy, select }, actor);

    if (!result.success) {
      return new Response(JSON.stringify({ error: result.error }), { status: 500 });
    }

    const data = result.data || [];
    const total = result.total || 0;

    // Analytics Hook
    await HookSystem.dispatch('teamMember.list.viewed', {
      count: data.length,
      actorId: actor?.id || 'anonymous',
    });

    return { success: true, data, meta: { total } };
  },
  {
    summary: 'List TeamMembers',
    tags: ['TeamMember'],
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
        name: 'role.eq',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by role (eq)',
      },
      {
        name: 'role.ne',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by role (ne)',
      },
      {
        name: 'role.in',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by role (in)',
      },
      {
        name: 'role',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by role (eq)',
      },
      {
        name: 'userId.eq',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by userId (eq)',
      },
      {
        name: 'userId.ne',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by userId (ne)',
      },
      {
        name: 'userId.contains',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by userId (contains)',
      },
      {
        name: 'userId.startsWith',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by userId (startsWith)',
      },
      {
        name: 'userId.endsWith',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by userId (endsWith)',
      },
      {
        name: 'userId.in',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by userId (in)',
      },
      {
        name: 'userId',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by userId (eq)',
      },
      {
        name: 'teamId.eq',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by teamId (eq)',
      },
      {
        name: 'teamId.ne',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by teamId (ne)',
      },
      {
        name: 'teamId.contains',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by teamId (contains)',
      },
      {
        name: 'teamId.startsWith',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by teamId (startsWith)',
      },
      {
        name: 'teamId.endsWith',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by teamId (endsWith)',
      },
      {
        name: 'teamId.in',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by teamId (in)',
      },
      {
        name: 'teamId',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by teamId (eq)',
      },
      {
        name: 'user.eq',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by user (eq)',
      },
      {
        name: 'user.ne',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by user (ne)',
      },
      {
        name: 'user.in',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by user (in)',
      },
      {
        name: 'user',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by user (eq)',
      },
      {
        name: 'team.eq',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by team (eq)',
      },
      {
        name: 'team.ne',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by team (ne)',
      },
      {
        name: 'team.in',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by team (in)',
      },
      {
        name: 'team',
        in: 'query',
        schema: { type: 'string' },
        required: false,
        description: 'Filter by team (eq)',
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
                      role: { type: 'string' },
                      userId: { type: 'string' },
                      teamId: { type: 'string' },
                      user: { type: 'string' },
                      team: { type: 'string' },
                      createdAt: { type: 'string', format: 'date-time' },
                      updatedAt: { type: 'string', format: 'date-time' },
                    },
                    required: ['userId', 'teamId', 'user', 'team', 'updatedAt'],
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
