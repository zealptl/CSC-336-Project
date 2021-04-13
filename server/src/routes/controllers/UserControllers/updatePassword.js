import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

// PATCH request
// Format:
// url params: :email:Users.email
// body: {password:string}
// return [JSON]: {successful} - successful or not
async function updatePassword(req, res) {
    const userEmail = req.params.email;
    const password = req.body.password;

    const updatedPassword = await db.query(queries.updatePassword([userEmail, password]));

    res.json({successful: true});
}

export default updateTask;