import type { ServiceResponse } from "@/types/service";
import type { APIContext } from "astro";
import type { ResendInvitationDTO } from "../sdk/types";

export class ResendInvitationTeamMemberAction {
  public static async run(
    input: ResendInvitationDTO,
    context: APIContext,
  ): Promise<ServiceResponse<any>> {
    return { success: true, data: {} as any };
  }
}
