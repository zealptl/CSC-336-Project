import db from '../db/db.js';
import queries from '../db/queries.js';
import { getUserEmail } from './groups.js';

// message:{groupID, body}
export async function sendMessage(socketID, message) {
    const { groupID, body } = message;
    const userEmail = getUserEmail(socketID);
    return await db.query(queries.insertMessage([userEmail, groupID, body]));
}

// reply:{replyTo:Meassage.messageID, message:{groupID, body}}
export async function sendReply(socketID, reply) {
    const { replyTo } = reply;
    
    const messageQuery = await sendMessage(socketID, reply.message);
    const repliedMesssageID = messageQuery.rows[0].messageid;
    return db.query(queries.insertReply([replyTo, repliedMesssageID]));
}