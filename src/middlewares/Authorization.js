import jwt from "jsonwebtoken"
import User from "../models/register"
const Authorization = async(req, res, next) => {
    try {
        console.log(req.headers);
        const token = req.headers.authorization;
        console.log(token);
        if (token) {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.id);
            if (user.Usertype === "admin") {
                next();
            } else if (user.Usertype !== "admin") {
                return res.status(401).json({
                    message: "The operation are performed by admin"
                });
            }
        } else {
            return res.status(401).json({
                status: "failed",
                message: "Not authorized"
            });
        }
    } catch (error) {
        return res.status(400).json({
            message: "Check Your Token IF Is valid"
        });
    }
};

export default Authorization;