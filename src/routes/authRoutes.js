
import express from 'express'
import { login, signup } from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/signup',signup);
authRouter.post('/login',login);

// authRouter.post('/create',login);
// authRouter.post('/get',login);
// authRouter.post('/edit',login);
// authRouter.post('/delete',login);

export default authRouter;
