import { initMentionNotifications } from '../actions/notify-mention';

/**
 * Initialize team-related hooks including mention notifications.
 */
export async function init() {
    // Register listener for @username mention notifications
    initMentionNotifications();
}
