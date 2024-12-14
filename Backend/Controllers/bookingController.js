import Doctor from '../models/DoctorSchema.js';
import User from '../models/UserSchema.js';
import Booking from '../models/bookingSchema.js';
import Stripe from 'stripe';

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const getCheckoutSession = async (req, res) => {
  try {
    // Find the doctor by ID
    const doctor = await Doctor.findById(req.params.doctorId);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
      cancel_url: `${req.protocol}://${req.get('host')}/checkout/${req.params.doctorId}`,
      customer_email: req.user.email, // Assuming user email is available on the request object
      line_items: [
        {
          price_data: {
            currency: 'bdt',
            product_data: {
              name: doctor.name,
              description: doctor.bio, // Assuming doctor has a `bio` field
              images: [doctor.photo], // Assuming doctor has a `photo` URL
            },
            unit_amount: doctor.ticketPrice * 100, // Convert price to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment', // Mode must be specified for Stripe checkout sessions
    });

    // Create a new booking in the database
    const booking = new Booking({
      doctor: doctor._id,
      user: req.user._id, // Assuming user ID is attached to the request object
      ticketPrice: doctor.ticketPrice,
      session: session.id, // Store the Stripe session ID
    });

    await booking.save();

    // Respond with the session ID
    res.status(200).json({ success: true, sessionId: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error creating checkout session' });
  }
};
