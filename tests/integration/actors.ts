import { Factory } from "@tests/integration/lib/factory";
import type { ApiClient } from "@tests/integration/lib/client";
import crypto from "node:crypto";

export const actors = {
  team: async (client: ApiClient, params: any = {}) => {
    let actor;
    if (params.id) {
      actor = await Factory.prisma.team.findUnique({
        where: { id: params.id },
      });
    } else if (params.email) {
      // Support email lookup if available
      actor = await Factory.prisma.team.findFirst({
        where: { email: params.email },
      });
    }

    if (!actor) {
      const factoryParams = { ...params };
      if (params.strategy) delete factoryParams.strategy;
      if (params.password) delete factoryParams.password;
      actor = await Factory.create("team", factoryParams);
    }

    const rawKey = `sk_team_${Date.now()}`;
    let dbKey = rawKey;

    // Auto-hash: Field implies hashing, so we hash the raw key at runtime
    dbKey = crypto.createHash("sha256").update(rawKey).digest("hex");

    // Create Token
    await Factory.create("teamApiKey", {
      team: { connect: { id: actor.id } },
      name: "Test Token",
      hashedKey: dbKey,
      prefix: "sk_team_",
    });

    client.useToken(rawKey);

    return actor;
  },
};
