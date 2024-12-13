import jwt from 'jsonwebtoken'; 
import User from '../models/UserSchema.js'; // Adjust the import path as necessary

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

        // Optionally, fetch user information if needed
        const user = await User.findById(decoded.id);

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
  
  export const restrict = roles => {  async (req, res, next) => {
        const userId = req.userId; // Assuming userId is set in the request by the authentication middleware

    let user;
    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    let user;

    if (patient) {
        user = patient;
    } else if (doctor) {
        user = doctor;
    } else {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
   // Define allowed roles
    const roles = ['admin', 'doctor'];

    // Check if the user's role is NOT allowed
    if (!roles.includes(user.role)) {
        return res.status(401).json({ success: false, message: "You're not authorized" });
    }

    next(); // Proceed to the next middleware or route handler
};
