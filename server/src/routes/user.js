import express from 'express';
import { createUser } from './controllers/UserControllers/createUser';
import { getUsers } from './controllers/UserControllers/getUsers';
import { getUser } from './controllers/UserControllers/getUser';
import { updatePassword } from './controllers/UserControllers/updatePassword';


const router = express.Router();
router.post('/', createUser);
router.get('/', getUsers); // get all users
router.get('/:email', getUser); // get a particular user
router.patch('/:email', updatePassword); // endpoint to change password

export default router;