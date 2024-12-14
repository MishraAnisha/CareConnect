import express from 'express';
import { getAllReviews, createReview } from '../controllers/reviewController.js';
import { authenticate, restrict } from '../Auth/verifyTokens.js';

const router = express.Router({ mergeParams: true });

// Route to get all reviews
router
  .route('/')
  .get(getAllReviews) // Public route to get all reviews
  .post(authenticate, restrict(['patient']), createReview); // Protected route to create a review

export default router;
