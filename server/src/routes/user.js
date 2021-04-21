import express from 'express';
import { createUser } from './controllers/UserControllers/createUser.js';
import { getUsers } from './controllers/UserControllers/getUsers.js';
import { getUser } from './controllers/UserControllers/getUser.js';
import { updatePassword } from './controllers/UserControllers/updatePassword.js';


const router = express.Router();
router.post('/', createUser);
router.get('/', getUsers); // get all users
router.get('/:email', getUser); // get a particular user
router.patch('/:email', updatePassword); // endpoint to change password

export default router;