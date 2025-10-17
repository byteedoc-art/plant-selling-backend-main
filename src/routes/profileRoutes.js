

import express from 'express';
import { get_profile_data, update_profile_data } from '../controllers/profileController.js';

const profileRouter = express.Router();

profileRouter.post("/",get_profile_data)
profileRouter.post("/update",update_profile_data)

// /profile/update
export default profileRouter;