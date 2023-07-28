import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import crypto from "crypto"
import nodemailer from "nodemailer";

dotenv.config()
import User from "../models/register"

const signToken = (id) => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: "10h",
    });
};


export const signup = async(req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res.status(400).json({
                status: "failed",
                message: "User already exists",
            });
        }

        const user = new User(req.body);
        const newUser = await user.save();

        const token = signToken(newUser._id);
        res.status(200).json({
            status: "success",
            token: token,
            user: newUser,
        });

        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: req.body.email,
            subject: "Account Verification",
            text: `Your verification code is: ${verificationCode}`,
        };

        await transporter.sendMail(mailOptions);

        // Save verification code and expiration date in the user document
        newUser.passwordResetToken = verificationCode;
        newUser.passwordResetExpires = Date.now() + 600000; // 10 minutes

        await newUser.save();

    } catch (err) {
        res.status(400).json({
            status: "failed",
            error: err.message,
        });
    }
};

export const login = async(req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
        return res.status(400).json({
            status: "failed",
            message: "Please provide email and password",
        });
    }

    const userSign = await User.findOne({ email }).select("+password");
    if (!userSign || !(await userSign.correctPassword(password, userSign.password))) {
        return res.status(401).json({
            status: "failed",
            message: "Incorrect email or password",
        });
    }

    const token = signToken(userSign._id);

    res.status(200).json({
        status: "success",
        token,
        userSign,
    });
};

export const getAllUsers = async(req, res) => {
    try {
        const allUsers = await User.find();

        res.status(200).json({
            status: "success",
            data: {
                users: allUsers,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            error: error.message,
        });
    }
};

export const getOneUser = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                status: "failed",
                message: "User not found",
            });
        }
        res.status(200).json({
            status: "success",
            data: {
                user,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            error: error.message,
        });
    }
};




// forget and rest passwordimport crypto from "crypto";
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
});



export const forgotPassword = async(req, res) => {
    try {
        const { email } = req.body;

        // Generate password reset token
        const resetToken = Math.floor(100000 + Math.random() * 900000).toString();

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                status: "failed",
                message: "User not found",
            });
        }

        // Save password reset token and expiration date in the user document
        user.passwordResetToken = resetToken;
        user.passwordResetExpires = Date.now() + 600000; // 10 minutes

        await user.save();

        // Send password reset email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Password Reset",
            text: `Your password reset token is: ${resetToken}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            status: "success",
            message: "Password reset token has been sent to your email",
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            error: error.message,
        });
    }
};

export const resetPassword = async(req, res) => {
    try {
        const { token, newPassword } = req.body;

        // Find user by the password reset token
        const user = await User.findOne({
            passwordResetToken: token,
            passwordResetExpires: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({
                status: "failed",
                message: "Invalid or expired password reset token",
            });
        }

        // Set the new password
        user.password = newPassword;
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;

        await user.save();

        res.status(200).json({
            status: "success",
            message: "Password reset successful",
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            error: error.message,
        });
    }
};