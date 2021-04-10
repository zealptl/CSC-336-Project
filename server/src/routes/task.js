import express from 'express';
import { createTask } from './controllers/TaskControllers/createTask';
import { getTasks } from './controllers/TaskControllers/getTasks';
import { updateTask } from './controllers/UserControllers/updatePassword';


const router = express.Router();
router.post('/', createTask);
router.get('/:groupID', getTasks); // get all tasks for this group
router.patch('/:taskID', updateTask); // endpoint to update task

export default router;