// GENERATED CODE - THE SIGNATURE IS MANAGED BY THE GENERATOR. YOU MAY MODIFY THE IMPLEMENTATION AND ADD CUSTOM IMPORTS.
import type { ServiceResponse } from '@/types/service';
import type { APIContext } from 'astro';
import type { ResendInvitationDTO } from '../sdk/types';
import type { ApiActor } from '@/lib/api/api-docs';

export class ResendInvitationTeamMemberAction {
  public static async run(
    input: ResendInvitationDTO,
    context: APIContext,
  ): Promise<ServiceResponse<void>> {
    return { success: true, data: {} as ApiActor };
  }
}
