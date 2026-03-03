// GENERATED CODE - THE SIGNATURE IS MANAGED BY THE GENERATOR. YOU MAY MODIFY THE IMPLEMENTATION AND ADD CUSTOM IMPORTS.
import type { ServiceResponse } from '@/types/service';
import type { APIContext } from 'astro';
import type { ApiActor } from '@/lib/api/api-docs';

export class DeleteInvitationTeamMemberAction {
  public static async run(_input: void, context: APIContext): Promise<ServiceResponse<void>> {
    return { success: true, data: {} as ApiActor };
  }
}
