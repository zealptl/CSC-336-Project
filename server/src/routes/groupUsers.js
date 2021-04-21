import express from 'express';
import { createGroupUser } from './controllers/GroupUsersControllers/createGroupUser.js';
import { getUsersForGroup, getGroupsForUser } from './controllers/GroupUsersControllers/getGroupUsers.js';
import { updateGroupUser } from './controllers/GroupUsersControllers/updateGroupUser.js';


const router = express.Router();
router.post('/', createGroupUser);
router.get('/getUsersForGroup/:groupID', getUsersForGroup); // get all Users for this Group
router.get('/getGroupsForUser/:userEmail', getGroupsForUser) // get all Groups for this User
router.patch('/:groupID/:userEmail', updateGroupUser); // endpoint to update GroupUser

export default router;
