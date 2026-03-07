// GENERATED CODE - THE SIGNATURE IS MANAGED BY THE GENERATOR. YOU MAY MODIFY THE IMPLEMENTATION AND ADD CUSTOM IMPORTS.
import { BaseRole } from './base-role';
import { roleRegistry } from '@/lib/registries/role-registry';

/** */
export class TeamOwnerRole extends BaseRole {
  readonly name: string = 'TEAM_OWNER';
  readonly description: string = '';
  readonly inherits: string[] = ['TEAM_MEMBER'];
  readonly permissions: string[] = [
    'team:update',
    'team:delete',
    'team:manage_keys',
    'team:manage_members',
    'team:invite',
    'team:read_self',
  ];
  protected readonly compatibleRoles: string[] = [];
}
roleRegistry.register(new TeamOwnerRole());
