import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

// POST request
// Format:
// body: {userEmail:Users.email, groupID:Groups.groupID, body:string, replyingTo:Message.messageID}
// return [JSON]: successful - succ or not succ, do not delete
export async function createReply(req, res) {
    const { userEmail, groupID, body, replyingTo } = req.body;
    
    const messageQuery = await db.query(queries.insertMessage([userEmail, groupID, body]));
    const createdMessage = messageQuery.rows[0].messageid;
    const replyQuery = await db.query(queries.insertReply([replyingTo, createdMessage]));
    
    res.json({successful: true});
}

export default createReply;