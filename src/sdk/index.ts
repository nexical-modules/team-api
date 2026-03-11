// GENERATED CODE - DO NOT MODIFY
import { ApiClient } from '@nexical/sdk-core';
import { InvitationSDK as BaseInvitationSDK } from './invitation-sdk.js';
import { TeamApiKeySDK as BaseTeamApiKeySDK } from './team-api-key-sdk.js';
import { TeamMemberSDK as BaseTeamMemberSDK } from './team-member-sdk.js';
import { TeamSDK as BaseTeamSDK } from './team-sdk.js';
export * from './invitation-sdk.js';
export * from './team-api-key-sdk.js';
export * from './team-member-sdk.js';
export * from './team-sdk.js';
export * from './types.js';

/** Main SDK for the team-api module. */
export class TeamModule extends BaseTeamSDK {
  public teamApiKey: BaseTeamApiKeySDK;
  public teamMember: BaseTeamMemberSDK;
  public invitation: BaseInvitationSDK;
  public static readonly roles: Record<string, string> = {
    TEAM_OWNER: 'TEAM_OWNER',
    TEAM_ADMIN: 'TEAM_ADMIN',
    TEAM_MEMBER: 'TEAM_MEMBER',
  };

  constructor(client: ApiClient) {
    super(client);
    this.teamApiKey = new BaseTeamApiKeySDK(client);
    this.teamMember = new BaseTeamMemberSDK(client);
    this.invitation = new BaseInvitationSDK(client);
  }
}
