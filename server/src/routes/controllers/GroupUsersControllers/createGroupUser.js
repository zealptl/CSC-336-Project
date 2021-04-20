import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

// POST request
// Format:
// body: {groupID:Groups.groupID, userEmail:Users.userEmail}
// return [JSON]: {successful} - successful or not
async function createGroupUser(req, res) {
    const { groupID, userEmail } = req.body;

    const createdGroupUser = await db.query(queries.insertGroupUser([groupID, userEmail]));

    res.json({successful: true});
}

export default createGroupUser;
