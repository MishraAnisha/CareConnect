import express from 'express';
import { authenticate } from '../Auth/verifyTokens.js';
import { getCheckoutSession } from '../controllers/bookingController.js';

const router = express.Router();

// Route to create a checkout session for a specific doctor
router.post('/checkout-session/:doctorId', authenticate, getCheckoutSession);

export default router;
