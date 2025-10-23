

import express from 'express';
import { get_profile_data, update_profile_data } from '../controllers/profileController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const profileRouter = express.Router();

profileRouter.get("/",authMiddleware, get_profile_data)
profileRouter.post("/update", authMiddleware, update_profile_data)

// /profile/update
export default profileRouter;