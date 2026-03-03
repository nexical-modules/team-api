// GENERATED CODE - THE SIGNATURE IS MANAGED BY THE GENERATOR. YOU MAY MODIFY THE IMPLEMENTATION AND ADD CUSTOM IMPORTS.
import { BaseRole } from './base-role';

/** */
export class TeamAdminRole extends BaseRole {
  readonly name: string = 'TEAM_ADMIN';
  readonly description: string = '';
  readonly inherits: string[] = [];
  readonly permissions: string[] = ['team:update', 'team:invite', 'team:read_self'];
}
