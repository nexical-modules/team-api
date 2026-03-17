// GENERATED CODE - DO NOT MODIFY
import { TeamModuleTypes } from '@/lib/api';
import { defineApi } from '@/lib/api/api-docs';
import { ApiGuard } from '@/lib/api/api-guard';
import { HookSystem } from '@/lib/modules/hooks';
import { InviteTeamMemberAction } from '@modules/team-api/src/actions/invite-team-member';
import { ListInvitationsTeamMemberAction } from '@modules/team-api/src/actions/list-invitations-team-member';
import { z } from 'zod';

export const GET = defineApi(
  async (context, actor) => {
    // 1. Parsing Input (Body + Query + Params)
    const rawBody = {};
    const query = Object.fromEntries(new URL(context.request.url).searchParams);
    const rawInput = { ...context.params, ...query, ...rawBody };

    const zodSchema = z.object({
      teamId: z.string(),
    });
    const body = (
      zodSchema ? zodSchema.parse(rawInput) : rawInput
    ) as TeamModuleTypes.ListInvitationsDTO;

    // 2. Hook: Filter Input
    const input: TeamModuleTypes.ListInvitationsDTO = await HookSystem.filter(
      'teamMember.listInvitations.input',
      body,
    );

    // 3. Security Check
    const combinedInput = { ...input }; // input already contains params, query and body
    await ApiGuard.protect(context, 'TEAM_MEMBER', combinedInput);

    // Inject userId from context for protected routes
    if (actor && actor.id) {
      Object.assign(combinedInput, { userId: actor.id });
    }

    // 4. Action Execution
    const result = await ListInvitationsTeamMemberAction.run(combinedInput, context);

    // 5. Hook: Filter Output
    const filteredResult = await HookSystem.filter('teamMember.listInvitations.output', result);

    // 6. Response
    if (!filteredResult.success) {
      throw new Error(filteredResult.error || 'Internal Server Error');
    }

    return { success: true, data: filteredResult.data };
  },
  {
    summary: 'List team invitations',
    tags: ['TeamMember'],

    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
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
  },
);
export const POST = defineApi(
  async (context, actor) => {
    // 1. Parsing Input (Body + Query + Params)
    const rawBody = await context.request.json();
    const query = Object.fromEntries(new URL(context.request.url).searchParams);
    const rawInput = { ...context.params, ...query, ...rawBody };

    const zodSchema = z.object({
      teamId: z.string(),
      email: z.string(),
      role: z.nativeEnum(TeamModuleTypes.TeamRole).optional(),
    });
    const body = (
      zodSchema ? zodSchema.parse(rawInput) : rawInput
    ) as TeamModuleTypes.InviteTeamMemberDTO;

    // 2. Hook: Filter Input
    const input: TeamModuleTypes.InviteTeamMemberDTO = await HookSystem.filter(
      'teamMember.inviteMember.input',
      body,
    );

    // 3. Security Check
    const combinedInput = { ...input }; // input already contains params, query and body
    await ApiGuard.protect(context, 'TEAM_ADMIN', combinedInput);

    // Inject userId from context for protected routes
    if (actor && actor.id) {
      Object.assign(combinedInput, { userId: actor.id });
    }

    // 4. Action Execution
    const result = await InviteTeamMemberAction.run(combinedInput, context);

    // 5. Hook: Filter Output
    const filteredResult = await HookSystem.filter('teamMember.inviteMember.output', result);

    // 6. Response
    if (!filteredResult.success) {
      throw new Error(filteredResult.error || 'Internal Server Error');
    }

    return { success: true, data: filteredResult.data };
  },
  {
    summary: 'Invite a new team member',
    tags: ['TeamMember'],

    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              teamId: { type: 'string' },
              email: { type: 'string' },
              role: { type: 'string' },
            },
            required: ['teamId', 'email'],
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
