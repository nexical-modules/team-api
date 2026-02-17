// GENERATED CODE - DO NOT MODIFY
import { Permissions } from '@/lib/security/permissions';

export const PermissionRegistry = {
  'team:update': {
    description: 'Update team details',
  },
  'team:delete': {
    description: 'Delete the team',
  },
  'team:manage_keys': {
    description: 'Create and delete API keys',
  },
  'team:manage_members': {
    description: 'Update or remove team members',
  },
  'team:invite': {
    description: 'Invite new members',
  },
  'team:read_self': {
    description: 'View team details',
  },
} as const;

export type PermissionAction = keyof typeof PermissionRegistry;

export const RolePermissions = {
  OWNER: [
    'team:update',
    'team:delete',
    'team:manage_keys',
    'team:manage_members',
    'team:invite',
    'team:read_self',
  ],
  ADMIN: ['team:update', 'team:invite', 'team:read_self'],
  MEMBER: ['team:read_self'],
} as const;

export class Permission {
  public static check(action: PermissionAction, role: string): boolean {
    return Permissions.check(action, role);
  }
}
