import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

// POST request
// Format:
// body: {groupID:Groups.groupID, status:bool, userEmail:Users.userEmail, task:string}
// return [JSON]: {createdGroupId} - the id of the newly created group
async function createTask(req, res) {
    const { groupID, task, status, userEmail } = req.body;
    
    const createdTask = await db.query(queries.insertTask([groupID, task, status, userEmail]));
    const createdGroupId = createdGroup.rows[0].groupid;
    
    for (let user of users)  {
        db.query(queries.insertGroupUser([createdGroupId, user]));
    }
    
    res.json({createdGroupId});
}

export default createGroup;