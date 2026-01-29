// GENERATED CODE - DO NOT MODIFY
import { db } from "@/lib/core/db";
import crypto from "node:crypto";
import type { APIContext, MiddlewareNext } from "astro";

// GENERATED CODE - DO NOT MODIFY
export async function onRequest(context: APIContext, next: MiddlewareNext) {
  const authHeader = context.request.headers.get("Authorization");

  if (authHeader?.startsWith("Bearer sk_team_")) {
    const token = authHeader.substring(7);

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const tokenEntity = await db.teamApiKey.findFirst({
      where: { hashedKey: hashedToken },
      include: { team: true },
    });

    const entity = tokenEntity?.team;

    if (entity) {
      context.locals.actor = { ...entity, type: "team" };
      context.locals.actorType = "team";
      return next();
    }
  }
  // Dynamic Bouncer Pattern: Validate Actor Status

  // Check if actor was set by previous middleware (e.g. session)
  if (context.locals.actor) return next();
  return next();
}
export default { onRequest };
