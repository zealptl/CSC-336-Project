import express from 'express';
import { createGroupUser } from './controllers/GroupUsersControllers/createGroupUser';
import { getGroupUsers } from './controllers/GroupUsersControllers/getGroupUsers';
import { updateGroupUser } from './controllers/GroupUsersControllers/updateGroupUser';


const router = express.Router();
router.post('/', createGroupUser);
router.get('/:groupID', getUsersForGroup); // get all Users for this Group
router.get('/:userEmail', getGroupsForUser) // get all Groups for this User
router.patch('/:groupID/:userEmail', updateGroupUser); // endpoint to update GroupUser

export default router;
