// GENERATED CODE - DO NOT MODIFY BY HAND
import { BaseResource, ApiClient } from "@nexical/sdk-core";
import { TeamSDK as BaseTeamSDK } from "./team-sdk";
import { TeamApiKeySDK as BaseTeamApiKeySDK } from "./team-api-key-sdk";
import { TeamMemberSDK as BaseTeamMemberSDK } from "./team-member-sdk";
import { InvitationSDK as BaseInvitationSDK } from "./invitation-sdk";

// GENERATED CODE - DO NOT MODIFY BY HAND
export * from "./team-sdk";
export * from "./team-api-key-sdk";
export * from "./team-member-sdk";
export * from "./types";
export * from "./invitation-sdk";

/** Main SDK for the team-api module. */
export class TeamSDK extends BaseTeamSDK {
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
