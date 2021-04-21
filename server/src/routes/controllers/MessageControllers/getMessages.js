import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

// GET request
// Format:
// url params: :userEmail:Users.email
// return [JSON]: messages:[{messageID, userEmail, groupID, body, timeSent}] - list of messages for a user
export async function getMessagesFromUser(req, res) {
    const userEmail = req.params.userEmail;

    const messageQuery = await db.query(queries.getMessagesFromUser([userEmail]));
    const { rows: messages } = messageQuery;

    res.json({messages});
}

// GET request
// Format:
// url params: :groupID:Groups.groupID
// return [JSON]: messages:[{messageID, userEmail, groupID, body, timeSent}] - messages for a group
export async function getMessagesFromGroup(req, res) {
    const groupID = req.params.groupID;

    const messageQuery = await db.query(queries.getMessagesFromGroup([groupID]));
    const { rows: messages } = messageQuery;

    res.json({messages});
}

export default { getMessagesFromUser,
                 getMessagesFromGroup,};
