import dotenv from 'dotenv';
import Stripe from 'stripe';
import Doctor from '../models/DoctorSchema.js';
import User from '../models/UserSchema.js';
import Booking from '../models/bookingSchema.js';

// Load environment variables
dotenv.config();

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const getCheckoutSession = async (req, res) => {
  try {
    // Find the doctor by ID
    const doctor = await Doctor.findById(req.params.doctorId);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: doctor.ticketPrice * 100, // Convert price to cents
      currency: 'bdt',
      metadata: {
        doctorId: doctor._id.toString(),
        userId: req.user._id.toString(), // Assuming user ID is attached to the request object
      },
    });

    // Create a new booking in the database
    const booking = new Booking({
      doctor: doctor._id,
      user: req.user._id,
      ticketPrice: doctor.ticketPrice,
      paymentIntentId: paymentIntent.id, // Store the Stripe payment intent ID
    });

    await booking.save();

    // Respond with the payment intent client secret
    res.status(200).json({
      success: true,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error creating payment intent',
    });
  }
};
