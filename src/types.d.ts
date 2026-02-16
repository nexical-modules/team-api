import type { Team } from './sdk/types.js';
declare global {
  namespace App {
    interface ActorMap {
      team: Team & { type: 'team' };
    }
  }
}
