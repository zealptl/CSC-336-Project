import express from 'express';
import { createMessage } from './controllers/MessageControllers/createMessage.js';
import { getMessagesFromUser, getMessagesFromGroup } from './controllers/MessageControllers/getMessages.js';
import { createReply } from './controllers/MessageControllers/createReply.js';


const router = express.Router();
router.post('/', createMessage); 
router.get('/getMessagesFromUser/:userEmail', getMessagesFromUser);
router.get('/getMessagesFromGroup/:groupID', getMessagesFromGroup);
router.post('/reply', createReply);


export default router;