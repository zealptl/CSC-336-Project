import express from 'express';
import { createGroup } from './controllers/GroupControllers/createGroup.js';
import { getGroupById } from './controllers/GroupControllers/getGroups.js';

const router = express.Router();
router.post('/', createGroup);
//router.get('/getGroupByName/:groupName', getGroups.getGroupByName); // get the groups the user is in
router.get('/getGroupByID/:groupID', getGroupById);

export default router;