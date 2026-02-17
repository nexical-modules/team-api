// GENERATED CODE - DO NOT MODIFY
import { BaseRole } from './base-role';

/** */
export class AdminRole extends BaseRole {
  readonly name: string = 'ADMIN';
  readonly description: string = '';
  readonly inherits: string[] = [];
  readonly permissions: string[] = ['team:update', 'team:invite', 'team:read_self'];
}
