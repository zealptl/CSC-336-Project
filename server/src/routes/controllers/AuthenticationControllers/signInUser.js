const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

export const signInUser = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;

    try {
        let user = await db.query(queries.getUser([email]));

        if (!user) res.status(401).json({ msg: 'Invalid Credentials' });

        const isMatch = await bcryptjs.compare(
            req.body.password,
            user.password
        );

        if (!isMatch) res.status(401).json({ msg: 'Invalid Credentials' });

        const payload = {
        currentUser: {
            id: user.id,
        },
        };

        // "deleting" password from object because we dont want to expose it
        user.password = undefined;

        jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 3600000 }, // its in seconds, for now have an arbitrarily big num
        (err, token) => {
            if (err) throw err;
            res.json({ token, user });
        }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server Error' });
    }
};