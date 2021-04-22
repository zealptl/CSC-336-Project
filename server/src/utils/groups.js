import db from '../db/db.js';
import queries from '../db/queries.js';
import formatGroup from './format.js';

const users = {};

// Add userEmail to a socketID
export function subscribeUser(socketID, userEmail) {
    users[socketID] = {userEmail, unsubscribe};
}

export function getUserEmail(socketID) {
    return users[socketID];
}

export function unsubscribeUser(socketID) {
    delete users[socketID];
}

// Gets all groups for a user
export async function getFromattedGroups(userEmail) {
    const userGroups = await db.query(queries.getGroupsForUser([userEmail]));
    
    return userGroups.map(group => formatGroup(group.groupid));
}