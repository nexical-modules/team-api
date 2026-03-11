// GENERATED CODE - THE SIGNATURE IS MANAGED BY THE GENERATOR. YOU MAY MODIFY THE IMPLEMENTATION AND ADD CUSTOM IMPORTS.
import { BaseRole } from './base-role';
import { roleRegistry } from '@/lib/registries/role-registry';

/** */
export class TeamAdminRole extends BaseRole {
  readonly name: string = 'TEAM_ADMIN';
  readonly description: string = '';
  readonly inherits: string[] = ['TEAM_MEMBER'];
  readonly permissions: string[] = ['team:update', 'team:invite', 'team:read_self'];
  protected readonly compatibleRoles: string[] = ['USER_ADMIN'];
}
roleRegistry.register(new TeamAdminRole());
