import type { ServiceResponse } from '@/types/service';
import { db } from '@/lib/core/db';
import { HookSystem } from '@/lib/modules/hooks';

/**
 * Notify mentioned users when they are tagged in a chat message.
 * This is triggered via HookSystem from chat-api when a message is created.
 */
export class NotifyMentionAction {
  /**
   * Parse @username mentions from message content and notify users.
   */
  public static async run(data: {
    messageId: string;
    content: string;
    threadId: string;
    authorId: string;
    teamId: string;
  }): Promise<ServiceResponse<{ notified: string[] }>> {
    try {
      // 1. Parse @username mentions from content
      const mentionPattern = /@([a-zA-Z0-9_-]+)/g;
      const mentions: string[] = [];
      let match;
      while ((match = mentionPattern.exec(data.content)) !== null) {
        mentions.push(match[1]);
      }

      if (mentions.length === 0) {
        return { success: true, data: { notified: [] } };
      }

      // 2. Look up users by username within the team
      const users = await db.user.findMany({
        where: {
          username: { in: mentions },
          memberships: {
            some: { teamId: data.teamId },
          },
        },
        select: { id: true, username: true, email: true, name: true },
      });

      if (users.length === 0) {
        return { success: true, data: { notified: [] } };
      }

      // 3. Get mentioner info
      const mentioner = await db.user.findUnique({
        where: { id: data.authorId },
        select: { name: true, username: true },
      });

      const mentionerName = mentioner?.name || mentioner?.username || 'Someone';
      const messagePreview =
        data.content.length > 100 ? data.content.substring(0, 100) + '...' : data.content;

      // 4. Create notifications for each mentioned user
      const notifiedIds: string[] = [];
      for (const user of users) {
        // Skip self-mentions
        if (user.id === data.authorId) continue;

        // Dispatch notification event (can be handled by email module)
        await HookSystem.dispatch('user.notification.created', {
          userId: user.id,
          type: 'mention',
          title: `${mentionerName} mentioned you`,
          body: messagePreview,
          link: `/chat?thread=${data.threadId}#${data.messageId}`,
          metadata: {
            threadId: data.threadId,
            messageId: data.messageId,
            mentionerId: data.authorId,
          },
        });

        notifiedIds.push(user.id);
      }

      return { success: true, data: { notified: notifiedIds } };
    } catch (err: unknown) {
      console.error('[NotifyMentionAction] Error:', err);
      return { success: false, error: (err as Error).message || 'Failed to notify mentions' };
    }
  }
}

/**
 * Initialize hook listener for mention notifications.
 * Call this from module init.
 */
export function initMentionNotifications() {
  HookSystem.on(
    'chat.message.created',
    async (data: {
      id: string;
      content: string;
      threadId: string;
      authorId: string;
      teamId: string;
    }) => {
      // Run notification in background, don't block message creation
      NotifyMentionAction.run({
        messageId: data.id,
        content: data.content,
        threadId: data.threadId,
        authorId: data.authorId,
        teamId: data.teamId,
      }).catch((err) => {
        console.error('[MentionNotifications] Background notification failed:', err);
      });
    },
  );
}
