// GENERATED CODE - DO NOT MODIFY
export interface CreateTeamDTO {
  name: string;
}

export interface UpdateTeamDTO {
  name?: string;
}

export interface CreateTeamApiKeyDTO {
  teamId: string;
  name: string;
  expiresAt?: Date;
}

export interface InviteTeamMemberDTO {
  teamId: string;
  email: string;
  role?: TeamRole;
}

export interface UpdateTeamMemberDTO {
  role: TeamRole;
}

export interface AcceptInvitationDTO {
  token: string;
}

export interface ResendInvitationDTO {
  invitationId?: string;
}

export interface ListInvitationsDTO {
  teamId: string;
}

export type { Team, TeamApiKey, TeamMember, Invitation, User };
export type { Team, TeamApiKey, TeamMember, Invitation, User } from '@prisma/client';

export enum TeamRole {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
}
