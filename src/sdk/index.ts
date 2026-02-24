// GENERATED CODE - DO NOT MODIFY
import { ApiClient } from '@nexical/sdk-core';
import { TeamSDK as BaseTeamSDK } from './team-sdk.js';
import { TeamApiKeySDK as BaseTeamApiKeySDK } from './team-api-key-sdk.js';
import { TeamMemberSDK as BaseTeamMemberSDK } from './team-member-sdk.js';
import { InvitationSDK as BaseInvitationSDK } from './invitation-sdk.js';

export * from './team-sdk.js';
export * from './team-api-key-sdk.js';
export * from './team-member-sdk.js';
export * from './invitation-sdk.js';
export * from './types.js';

/** Main SDK for the team-api module. */
export class TeamModule extends BaseTeamSDK {
  public teamApiKey: BaseTeamApiKeySDK;
  public teamMember: BaseTeamMemberSDK;
  public invitation: BaseInvitationSDK;

  constructor(client: ApiClient) {
    super(client);
    this.teamApiKey = new BaseTeamApiKeySDK(client);
    this.teamMember = new BaseTeamMemberSDK(client);
    this.invitation = new BaseInvitationSDK(client);
  }
}
