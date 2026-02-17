// GENERATED CODE - DO NOT MODIFY
import { defineApi } from '@/lib/api/api-docs';
import { ApiGuard } from '@/lib/api/api-guard';
import { HookSystem } from '@/lib/modules/hooks';
import { CreateTeamAction } from '@modules/team-api/src/actions/create-team';
import * as TeamApiModuleTypes from '../../../sdk/types';

export const POST = defineApi(
  async (context, actor) => {
    // 1. Body Parsing (Input)
    const body = (await context.request.json()) as TeamApiModuleTypes.CreateTeamDTO;

    const query = Object.fromEntries(new URL(context.request.url).searchParams);

    // 2. Hook: Filter Input
    const input: TeamApiModuleTypes.CreateTeamDTO = await HookSystem.filter(
      'team.createTeam.input',
      body,
    );

    // 3. Security Check
    const combinedInput = { ...context.params, ...query, ...input };
    await ApiGuard.protect(context, 'employee', combinedInput);

    // Inject userId from context for protected routes
    if (actor && actor.id) {
      Object.assign(combinedInput, { userId: actor.id });
    }

    // 4. Action Execution
    const result = await CreateTeamAction.run(combinedInput, context);

    // 5. Hook: Filter Output
    const filteredResult = await HookSystem.filter('team.createTeam.output', result);

    // 6. Response
    if (!filteredResult.success) {
      return new Response(JSON.stringify({ error: filteredResult.error }), { status: 400 });
    }

    return new Response(JSON.stringify(filteredResult.data), { status: 200 });
  },
  {
    summary: 'Create a new team',
    tags: ['Team'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              name: { type: 'string' },
            },
            required: ['name'],
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
