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

export type TeamRole = (typeof TeamRole)[keyof typeof TeamRole];

export const TeamRole = {
  OWNER: "OWNER",
  ADMIN: "ADMIN",
  MEMBER: "MEMBER",
} as const;

import type {
  Team,
  TeamApiKey,
  TeamMember,
  Invitation,
  User,
} from "@prisma/client";

export type { Team, TeamApiKey, TeamMember, Invitation, User };

export type TeamWithRelations = Team & {
  members: (TeamMember & { user: User })[];
  invitations: Invitation[];
  apiKeys?: TeamApiKey[];
};

export type {
  Team,
  TeamApiKey,
  TeamMember,
  Invitation,
  User,
} from "@prisma/client";
