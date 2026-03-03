// GENERATED CODE - THE SIGNATURE IS MANAGED BY THE GENERATOR. YOU MAY MODIFY THE IMPLEMENTATION AND ADD CUSTOM IMPORTS.
import { BaseRole } from './base-role';

/** */
export class TeamMemberRole extends BaseRole {
  readonly name: string = 'TEAM_MEMBER';
  readonly description: string = '';
  readonly inherits: string[] = [];
  readonly permissions: string[] = ['team:read_self'];
}
