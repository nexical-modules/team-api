// GENERATED CODE - DO NOT MODIFY
import { db } from '@/lib/core/db';
import crypto from 'node:crypto';
import type { APIContext, MiddlewareNext } from 'astro';

export async function onRequest(context: APIContext, next: MiddlewareNext) {
  const publicRoutes: string[] = [];
  if (publicRoutes.some((route) => context.url.pathname.startsWith(route))) return next();
  const authHeader = context.request.headers.get('Authorization');
  if (authHeader?.startsWith('Bearer sk_team_')) {
    const token = authHeader.substring(7);
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
    const tokenEntity = await db.teamApiKey.findFirst({
      where: { hashedKey: hashedToken },
      include: { team: true },
    });
    const entity = tokenEntity?.team;

    if (entity) {
      context.locals.actor = { ...entity, type: 'team', role: 'TEAM' };
      context.locals.actorType = 'team';
      return next();
    }
  }
  if (context.locals.actor) return next();
  return next();
}
export default { onRequest };
