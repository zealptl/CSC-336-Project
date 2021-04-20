import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

// GET request
// Format:
// url params: :email - email of user to get
// return [JSON]: user:{email, firstName, lastName, password} -
export async function getUser(req, res) {
    const userEmail = req.params.email;
    
    const userQuery = await db.query(queries.getUser([userEmail]));
    const user = userQuery.rows[0];
    
    res.json({user});
}

export default { getUser };