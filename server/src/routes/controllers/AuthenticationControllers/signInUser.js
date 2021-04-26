import db from '../../../db/db.js';
import queries from '../../../db/queries.js';

export const signInUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		let userQuery = await db.query(queries.getUser([email]));

		const user = userQuery.rows[0];

		if (!user) res.status(401).json({ msg: 'Invalid Credentials' });

		if (user.password !== password)
			res.status(401).json({ msg: 'Invalid Credentials' });

		user.password = undefined;

		res.json({ user });
	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: 'Server Error' });
	}
};
