import express from 'express';
import { signInUser } from './controllers/AuthenticationControllers/signInUser.js';
import { isUserSignedInMiddleware } from './middlewares/isUserSignedIn.js';
import { signUpUser } from './controllers/AuthenticationControllers/signUpUser.js';
import { getSignedInUser } from './controllers/AuthenticationControllers/getSignedInUser.js';

const router = express.Router();
router.post('/signin', signInUser);
router.post('/signup', signUpUser);
router.get('/signin', isUserSignedInMiddleware, getSignedInUser);

export default router;