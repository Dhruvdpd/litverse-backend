import express from 'express';
import { getAllCommunities, getCommunityByTopic, getCommunity } from '../controllers/communityController.js';

const router = express.Router();

router.get('/', getAllCommunities);
router.get('/topic/:topic', getCommunityByTopic);
router.get('/:name', getCommunity);

export default router;