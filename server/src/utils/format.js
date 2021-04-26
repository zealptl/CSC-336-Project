import { getUserEmail } from './groups.js';

export function formatGroup(groupID) {
    return `group:${groupID}`;
}

// message:{groupID, body}
export function formatMessage(socketID, message) {
    const userEmail = getUserEmail(socketID);
    return {
        userEmail,
        ...message,
    }
}