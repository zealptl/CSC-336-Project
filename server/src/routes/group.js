import express from 'express';
import { createGroup } from './controllers/GroupControllers/createGroup.js';
import { getGroups } from './controllers/GroupControllers/getGroups.js';

const router = express.Router();
router.post('/', createGroup);
router.get('/user/getGroupByName/:groupName', getGroups.getGroupByName); // get the groups the user is in
router.get('/user/getGroupByID/:groupID', getGroups.getGroupByID);

export default router;