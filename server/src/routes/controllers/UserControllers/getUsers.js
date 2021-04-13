import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

// GET request
// Format:
// return [JSON]: users:[{email, firstName, lastName, password}] - return all users
async function getUsers(req, res) {
    const userQuery = await db.query(queries.getUsers());
    const { rows: users } = userQuery;
    
    res.json({users});
}

export default { getUsers };