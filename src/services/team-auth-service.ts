import { db } from "@/lib/core/db";
import { createHash } from "node:crypto";
import type { Team } from "@prisma/client";

const KEY_PREFIX = 'sk_team_';

/**
 * Manual service for Team Authentication logic (API Keys, etc.)
 */
export class TeamAuthService {
    /**
     * Validates a raw team API key and returns the associated team.
     * Updates lastUsedAt if the key is valid.
     */
    static async validateKey(rawKey: string): Promise<Team | null> {
        if (!rawKey.startsWith(KEY_PREFIX)) {
            return null;
        }

        const hashedKey = createHash('sha256').update(rawKey).digest('hex');

        const key = await db.teamApiKey.findUnique({
            where: { hashedKey },
            include: { team: true }
        });

        if (!key) return null;

        // Fire and forget update of lastUsedAt
        db.teamApiKey.update({
            where: { id: key.id },
            data: { lastUsedAt: new Date() }
        }).catch(err => {
            // Log but don't block
            console.error('Failed to update team API key lastUsedAt:', err);
        });

        return key.team;
    }
}
