import express from 'express';
import { signInUser } from './controllers/AuthenticationControllers/signInUser.js';
import { signUpUser } from './controllers/AuthenticationControllers/signUpUser.js';

const router = express.Router();
router.post('/signin', signInUser);
router.post('/signup', signUpUser);

export default router;
