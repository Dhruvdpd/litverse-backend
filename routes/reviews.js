import express from 'express';
import Review from '../models/Review.js';

const router = express.Router();

// GET reviews for a specific book
router.get('/', async (req, res) => {
  const { bookId } = req.query;

  if (!bookId) {
    return res.status(400).json({ error: 'Missing bookId' });
  }

  try {
    const reviews = await Review.find({ bookId }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    console.error('Error fetching reviews:', err);
    res.status(500).json({ error: 'Server error' });
  }
});
// POST a new review
router.post('/', async (req, res) => {
    console.log('Received POST /api/reviews with body:', req.body);
    const { bookId, username, content } = req.body;
  
    if (!bookId || !username || !content) {
      return res.status(400).json({ error: 'Missing fields in request' });
    }
  
    try {
      const newReview = new Review({ bookId, username, content });
      console.log('New review:', newReview);
      await newReview.save();
      res.status(201).json(newReview);
    } catch (err) {
      console.error('Error creating review:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
export default router;
