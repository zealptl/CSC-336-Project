import db from '../db/db.js';
import queries from '../db/queries.js';
import { getUserEmail } from './groups.js';

export async function sendMessage(socketID, message) {
    const { groupID, body } = message;
    const userEmail = getUserEmail(socketID);
    db.query(queries.insertMessage(userEmail, groupID, body));
}