// GENERATED CODE - THE SIGNATURE IS MANAGED BY THE GENERATOR. YOU MAY MODIFY THE IMPLEMENTATION AND ADD CUSTOM IMPORTS.
import { BaseRole } from './base-role';

/** */
export class TeamOwnerRole extends BaseRole {
  readonly name: string = 'TEAM_OWNER';
  readonly description: string = '';
  readonly inherits: string[] = [];
  readonly permissions: string[] = [
    'team:update',
    'team:delete',
    'team:manage_keys',
    'team:manage_members',
    'team:invite',
    'team:read_self',
  ];
}
