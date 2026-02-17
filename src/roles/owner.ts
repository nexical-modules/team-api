// GENERATED CODE - DO NOT MODIFY
import { BaseRole } from './base-role';

/** */
export class OwnerRole extends BaseRole {
  readonly name: string = 'OWNER';
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
