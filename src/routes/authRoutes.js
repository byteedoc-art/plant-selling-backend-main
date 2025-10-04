
import express from 'express'
import { signup } from '../controllers/authController.js';
// require

const router = express.Router();

// router.post('/login',authController);
router.post('/signup',signup);

export default router;


// module.exports router