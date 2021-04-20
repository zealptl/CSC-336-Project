import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

// PATCH request
// Format:
// url params: :groupID:Groups.groupID/:userEmail:Users.email
// body: {status:string}
// return [JSON]: {successful} - successful or not
export async function updateGroupUser(req, res) {
    const { groupID, userEmail } = req.params;
    const { status } = req.body;

    const updatedGroupUser = await db.query(queries.updateGroupUser([groupID, userEmail, status]));

    res.json({successful: true});
}

export default updateGroupUser;
