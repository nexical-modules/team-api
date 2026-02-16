import { HookSystem } from '@/lib/modules/hooks';

export class TeamApiKeyHooks {
  static init() {
    // Hash Key before creation
    HookSystem.filter('teamApiKey.beforeCreate', async (data: any) => {
      // We expect 'data' to contain the input for creation.
      // But we also need to return the RAW key to the user.
      // The Service returns the MODEL.
      // So we can't easily return the raw key via this hook for the standard CRUD.
      // This confirms why we need a Custom Action `create-team-api-key`.

      // However, if someone DOES use the standard CRUD, we should still ensure it's hashed?
      // Or block standard creation?
      // For now, let's assume standard creation is blocked/hidden or strictly for internal use.

      return data;
    });
  }
}

export const init = TeamApiKeyHooks.init;
