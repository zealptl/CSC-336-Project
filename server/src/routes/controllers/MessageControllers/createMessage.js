import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

// POST request
// Format:
// body: {userEmail:Users.email, groupID:Groups.groupID, body:string}
// return [JSON]: successful - succ or not succ, do not delete
export async function createMessage(req, res) {
    const { userEmail, groupID, body } = req.body;
    
    const messageQuery = await db.query(queries.insertMessage([userEmail, groupID, body]));
    
    res.json({successful: true});
}

export default createMessage;