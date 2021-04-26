import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

export async function getSignedInUser(req, res) {
    try {
        const email = req.params.email;

        const user = await db.query(queries.getUser([email]));

        res.json({user});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server Error' });
    }
}