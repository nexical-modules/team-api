import type { Team } from "./sdk/types";
declare global {
  namespace App {
    interface ActorMap {
      team: Team & { type: "team" };
    }
  }
}
