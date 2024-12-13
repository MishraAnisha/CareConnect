import jwt from 'jsonwebtoken';
import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';

export const authenticate = async (req, res, next) => {
    // Get the token from headers
    const authToken = req.headers.authorization;

    // Check if the authorization header exists and starts with 'Bearer'
    if (!authToken || !authToken.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'No token, authorization denied' });
    }

    try {
        // Extract the token from the Bearer string
        const token = authToken.split(' ')[1];

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // Ensure your secret is set

        // Fetch user information if needed
        const user = await User.findById(decoded.id) || await Doctor.findById(decoded.id);

        // Check if the user exists
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Attach user information to the request object
        req.user = user;
        req.userId = decoded.id; // Attach the user ID
        req.role = decoded.role; // Attach the user role if necessary

        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        console.error(err);
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: 'Token is expired' });
        }
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
};

export const restrict = roles => {
    return async (req, res, next) => {
        const userId = req.userId; // Assuming userId is set in the request by the authentication middleware

        // Fetch the user based on their type
        const user = await User.findById(userId) || await Doctor.findById(userId);

        // Check if the user exists
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Check if the user's role is allowed
        if (!roles.includes(user.role)) {
            return res.status(401).json({ success: false, message: "You're not authorized" });
        }

        next(); // Proceed to the next middleware or route handler
    };
}
