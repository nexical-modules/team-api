// GENERATED CODE - DO NOT MODIFY BY HAND
import { BaseResource, ApiClient } from "@nexical/sdk-core";
import type { TeamApiKey, CreateTeamApiKeyDTO } from "./types";

// GENERATED CODE - DO NOT MODIFY BY HAND
/** SDK client for TeamApiKey. */
export class TeamApiKeySDK extends BaseResource {
  public async list(params?: {
    search?: string;
    take?: number;
    skip?: number;
    orderBy?: string | Record<string, "asc" | "desc">;
    filters?: Record<string, any>;
  }): Promise<{
    success: boolean;
    data: TeamApiKey[];
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
    return this._request("GET", `/team-api-key${query}`);
  }

  public async get(
    id: string,
  ): Promise<{ success: boolean; data: TeamApiKey; error?: string }> {
    return this._request("GET", `/team-api-key/${id}`);
  }

  public async delete(
    id: string,
  ): Promise<{ success: boolean; error?: string }> {
    return this._request("DELETE", `/team-api-key/${id}`);
  }

  public async createKey(
    data: CreateTeamApiKeyDTO,
  ): Promise<{ success: boolean; data: TeamApiKey; error?: string }> {
    return this._request("POST", `/team-api-key/keys`, data);
  }
}
