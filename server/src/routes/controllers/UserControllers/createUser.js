import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

// POST request
// Format:
// body: {email:string, firstName:string, lastName:string, password:string}
// return [JSON]: successful - succ or not succ, do not delete
export async function createUser(req, res) {
    const { email, firstName, lastName, password } = req.body;
    
    const userQuery = await db.query(queries.insertUser([email, firstName, lastName, password]));
    
    res.json({successful: true});
}

export default createUser;