// GENERATED CODE - DO NOT MODIFY BY HAND
import { BaseResource, ApiClient } from "@nexical/sdk-core";
import type {
  TeamMember,
  ListInvitationsDTO,
  Invitation,
  InviteTeamMemberDTO,
  ResendInvitationDTO,
  AcceptInvitationDTO,
} from "./types";

// GENERATED CODE - DO NOT MODIFY BY HAND
/** SDK client for TeamMember. */
export class TeamMemberSDK extends BaseResource {
  public async list(params?: {
    search?: string;
    take?: number;
    skip?: number;
    orderBy?: string | Record<string, "asc" | "desc">;
    filters?: Record<string, any>;
  }): Promise<{
    success: boolean;
    data: TeamMember[];
    error?: string;
    meta: { total: number };
  }> {
    let orderBy = params?.orderBy;
    if (orderBy && typeof orderBy === "object") {
      const keys = Object.keys(orderBy);
      if (keys.length > 0) {
        orderBy = `${keys[0]}:${orderBy[keys[0]]}`;
      }
    }
    const query = this.buildQuery({
      ...params?.filters,
      search: params?.search,
      take: params?.take,
      skip: params?.skip,
      orderBy,
    });
    return this._request("GET", `/team-member${query}`);
  }

  public async get(
    id: string,
  ): Promise<{ success: boolean; data: TeamMember; error?: string }> {
    return this._request("GET", `/team-member/${id}`);
  }

  public async update(
    id: string,
    data: Partial<TeamMember>,
  ): Promise<{ success: boolean; data: TeamMember; error?: string }> {
    return this._request("PUT", `/team-member/${id}`, data);
  }

  public async delete(
    id: string,
  ): Promise<{ success: boolean; error?: string }> {
    return this._request("DELETE", `/team-member/${id}`);
  }

  public async listInvitations(): Promise<{
    success: boolean;
    data: Invitation[];
    error?: string;
  }> {
    return this._request("GET", `/team-member/invitations`);
  }

  public async inviteMember(
    data: InviteTeamMemberDTO,
  ): Promise<{ success: boolean; data: Invitation; error?: string }> {
    return this._request("POST", `/team-member/invitations`, data);
  }

  public async resendInvitation(
    id: string,
    data: ResendInvitationDTO,
  ): Promise<{ success: boolean; data: any; error?: string }> {
    return this._request("POST", `/team-member/invitations/${id}/resend`, data);
  }

  public async acceptInvitation(
    data: AcceptInvitationDTO,
  ): Promise<{ success: boolean; data: any; error?: string }> {
    return this._request("POST", `/team-member/invitations/accept`, data);
  }

  public async deleteInvitation(
    id: string,
  ): Promise<{ success: boolean; data: any; error?: string }> {
    return this._request("DELETE", `/team-member/invitations/${id}`);
  }
}
