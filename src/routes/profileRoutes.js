

import express from 'express';
import { get_profile_data } from '../controllers/profileController.js';

const profileRouter = express.Router();

profileRouter.post("/",get_profile_data)

export default profileRouter;