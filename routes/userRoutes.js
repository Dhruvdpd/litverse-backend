import express from 'express';
import { signup, signin, getProfile } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';
// import { getRecommendations } from '../controllers/userController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', protect, getProfile);
// router.get('/recommendations/:id', getRecommendations);

export default router;