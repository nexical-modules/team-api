// GENERATED CODE - THE SIGNATURE IS MANAGED BY THE GENERATOR. YOU MAY MODIFY THE IMPLEMENTATION AND ADD CUSTOM IMPORTS.
import { roleRegistry } from '@/lib/registries/role-registry';
import { BaseRole } from './base-role';

/** */
export class TeamMemberRole extends BaseRole {
  readonly name: string = 'TEAM_MEMBER';
  readonly description: string = '';
  readonly inherits: string[] = [];
  readonly permissions: string[] = ['team:read_self'];
  protected readonly compatibleRoles: string[] = ['USER_EMPLOYEE'];
}
roleRegistry.register(new TeamMemberRole());
