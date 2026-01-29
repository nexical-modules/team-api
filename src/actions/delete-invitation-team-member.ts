import type { ServiceResponse } from "@/types/service";
import type { APIContext } from "astro";

export class DeleteInvitationTeamMemberAction {
  public static async run(
    input: any,
    context: APIContext,
  ): Promise<ServiceResponse<any>> {
    return { success: true, data: {} as any };
  }
}
