import Review from './models/ReviewSchema.js';

// Function to get all reviews
export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        if (reviews.length === 0) {
            return res.status(404).json({ success: false, message: 'No reviews found' });
        }
        res.status(200).json({ success: true, message: 'Successful', data: reviews });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

// Function to create a new review
export const createReview = async (req, res) => {
    try {
        const { doctor, user } = req.body;

        // Basic validation
        if (!doctor || !user) {
            return res.status(400).json({ success: false, message: 'Doctor and user are required' });
        }

        // Set user ID if provided
        req.body.user = req.userId; // Assuming req.userId is set by some authentication middleware

        const newReview = new Review(req.body);
        
        // Save the new review
        const savedReview = await newReview.save();

        // Update the doctor's reviews
        await Doctor.findByIdAndUpdate(doctor, { $push: { reviews: savedReview._id } });

        res.status(201).json({ success: true, message: 'Review submitted successfully', data: savedReview });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};
