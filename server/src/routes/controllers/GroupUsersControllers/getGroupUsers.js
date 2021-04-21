import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

// GET request
// Format:
// url params: :groupID:Groups.groupID
// return [JSON]: users:[{userEmail}] - list of users associated to a userEmail
export async function getUsersForGroup(req, res) {
    const groupID = req.params.groupID;
    
    const userEmails = await db.query(queries.getUsersForGroup([groupID]));
    const { rows: users } = userEmails;
    
    res.json({users});
}

// GET request
// Format:
// url params: :userEmail:Users.email
// return [JSON]: groups:[{groupID}] - list of groupID's associated to a userEmail
export async function getGroupsForUser(req, res) {
    const userEmail = req.params.userEmail;
    
    const groupQueries = await db.query(queries.getGroupsForUser([userEmail]));
    const { rows: groups } = groupQueries;
    
    res.json({groups});
}

export default { getUsersForGroup, 
                 getGroupsForUser,};