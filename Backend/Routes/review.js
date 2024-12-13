import express from 'express';
import { getAllReviews, createReview } from '../controllers/reviewController.js';
import { authenticate, restrict } from '../auth/verify.js';

const router = express.Router();

// Route to get all reviews
router.get('/reviews', getAllReviews);

// Route to create a new review with authentication and restriction for 'patient' role
router.post('/reviews', authenticate, restrict('patient'), createReview);

export default router;
