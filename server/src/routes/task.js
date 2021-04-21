import express from 'express';
import { createTask } from './controllers/TaskControllers/createTask.js';
import { getTaskFromId, getTasksFromGroup } from './controllers/TaskControllers/getTasks.js';
import { updateTask } from './controllers/TaskControllers/updateTask.js';


const router = express.Router();
router.post('/', createTask); 
router.get('/getTaskFromId/:taskID', getTaskFromId); // get all tasks for this group
router.get('/getTasksFromGroup/:groupID', getTasksFromGroup);
router.patch('/:taskID', updateTask); // endpoint to update task

export default router;