import Doctor from '../models/DoctorSchema.js';
import User from '../models/UserSchema.js';
import Booking from '../models/bookingSchema.js';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const getCheckoutSession = async (req, res) => {
  try {
    // Get currently booked doctor
    const doctor = await Doctor.findById(req.params.doctorId);
    
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
      cancel_url: `${req.protocol}://${req.get('host')}/checkout/${doctorId}`,
      customer_email: req.user.email, // Assuming user email is attached to the request
      line_items: [{
        price_data: {
          currency: 'bdt',
          product_data: {
            name: doctor.name,
            description: doctor.bio, // Assuming doctor object has a bio property
            images: [doctor.photo], // Assuming doctor object has a photo URL
          },
          unit_amount: doctor.ticketPrice * 100, // Convert to cents
        },
        quantity: 1,
      }],
    });

    // Send the session ID back to the client/////////////ADDED THIS EXTRAAA
    res.status(200).json({ success: true, sessionId: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error creating checkout session' });
  }
//// Create a checkout session
    const booking = new Booking({
      doctor: doctor._id,
      user: req.user._id, // Assuming user ID is stored in the request
      ticketPrice: doctor.ticketPrice,
      session: sessionId,
    });

    await booking.save(); // Save the booking to the database

    // Send response back to the client
    res.status(200).json({ success: true, message: 'Successfully paid', session: sessionId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error creating booking session' });
  }
};
