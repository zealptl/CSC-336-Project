import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

// POST request
// Format:
// body: {groupName:string, users:[user:Users.email]}
// return [JSON]: createdGroupId - the id of the newly created group
export async function createGroup(req, res) {
    const group = req.body.groupName;
    const users = req.body.users;
    
    const createdGroup = await db.query(queries.insertGroups([group]));
    const createdGroupId = createdGroup.rows[0].groupid;
    
    for (let user of users)  {
        db.query(queries.insertGroupUser([createdGroupId, user]));
    }
    
    res.json({createdGroupId});
}

export default createGroup;