import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Middleware to protect routes requiring authentication
export const protect = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
        // Skip authentication for the "verify-verification-code" and "reset-password" routes
        if (
            req.originalUrl === "/verify-verification-code" ||
            req.originalUrl === "/reset-password"
        ) {
            return next();
        }

        return res.status(401).json({
            status: "failed",
            message: "Not authorized to access this route",
        });
    }

    try {
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);

        // Attach the decoded user information to the request object for further use
        req.user = decoded;

        next();
    } catch (error) {
        res.status(401).json({
            status: "failed",
            message: "Invalid token",
        });
    }
};