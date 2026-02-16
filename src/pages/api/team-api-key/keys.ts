// GENERATED CODE - DO NOT MODIFY
import { defineApi } from '@/lib/api/api-docs';
import { ApiGuard } from '@/lib/api/api-guard';
import { HookSystem } from '@/lib/modules/hooks';
import { CreateTeamApiKeyAction } from '@modules/team-api/src/actions/create-team-api-key';
import type { TeamApiModuleTypes } from '@/lib/api';

export const POST = defineApi(
  async (context, actor) => {
    // 1. Body Parsing (Input)
    const body = (await context.request.json()) as TeamApiModuleTypes.CreateTeamApiKeyDTO;

    const query = Object.fromEntries(new URL(context.request.url).searchParams);

    // 2. Hook: Filter Input
    const input: TeamApiModuleTypes.CreateTeamApiKeyDTO = await HookSystem.filter(
      'teamApiKey.createKey.input',
      body,
    );

    // 3. Security Check
    const combinedInput = { ...context.params, ...query, ...input };
    await ApiGuard.protect(context, 'team-owner', combinedInput);

    // Inject userId from context for protected routes
    if (actor && actor.id) {
      Object.assign(combinedInput, { userId: actor.id });
    }

    // 4. Action Execution
    const result = await CreateTeamApiKeyAction.run(combinedInput, context);

    // 5. Hook: Filter Output
    const filteredResult = await HookSystem.filter('teamApiKey.createKey.output', result);

    // 6. Response
    if (!filteredResult.success) {
      return new Response(JSON.stringify({ error: filteredResult.error }), { status: 400 });
    }

    return { success: true, data: filteredResult.data };
  },
  {
    summary: 'Create a new API Key (returns raw key)',
    tags: ['TeamApiKey'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              teamId: { type: 'string' },
              name: { type: 'string' },
              expiresAt: { type: 'string', format: 'date-time' },
            },
            required: ['teamId', 'name'],
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
                hashedKey: { type: 'string' },
                prefix: { type: 'string' },
                lastUsedAt: { type: 'string', format: 'date-time' },
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
