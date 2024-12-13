const Stripe = require('stripe');
const Doctor = require('../models/Doctor'); // Assuming you have a Doctor model
const User = require('../models/User'); // Assuming you have a User model

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Initialize Stripe with secret key

export const getCheckoutSession = async (req, res) => {
    try {
        // Get currently booked doctor
        const doctor = await Doctor.findById(req.params.doctorId);
        const user = await User.findById(req.userId); // Assuming userId is set in the request

        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            customer_email: user.email, // Optional: Pre-fill email for the customer
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: doctor.name, // Doctor's name for the product
                            description: doctor.specialization, // Doctor's specialization
                        },
                        unit_amount: doctor.fee * 100, // Fee in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.FRONTEND_URL}/success`, // Redirect on success
            cancel_url: `${process.env.FRONTEND_URL}/cancel`, // Redirect on cancel
        });

        // Respond with session URL
        res.status(200).json({ success: true, sessionId: session.id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
