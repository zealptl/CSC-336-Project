import express from 'express';
import { createGroup } from './controllers/GroupControllers/createGroup';
import { getGroups } from './controllers/GroupControllers/getGroups';

const router = express.Router();
router.post('/', createGroup);
router.get('/user/:groupName', getGroups); // get the groups the user is in

export default router;