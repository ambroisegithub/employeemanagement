import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import crypto from "crypto";
import nodemailer from "nodemailer";
import otpGenerator from "otp-generator";
dotenv.config();
import User from "../models/register";
import bcrypt from "bcryptjs"
const signToken = (id) => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: "10h",
    });
};

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const signup = async(req, res) => {
    try {
        const { email, Usertype } = req.body;

        // Check if there's already an admin in the database
        if (Usertype === "admin") {
            const adminExists = await User.exists({ Usertype: "admin" });
            if (adminExists) {
                return res.status(400).json({
                    status: "failed",
                    message: "Only one admin is allowed to sign up",
                });
            }
        }

        // Check if the user already exists
        const userExists = await User.exists({ email });
        if (userExists) {
            return res.status(400).json({
                status: "failed",
                message: "User already exists",
            });
        }

        // Create a new user
        const newUser = await User.create(req.body);

        // Create a JWT token
        const token = signToken(newUser._id);

        res.status(200).json({
            status: "success",

            token: token,
            user: newUser,
        });

        // Generate OTP
        const otp = otpGenerator.generate(6, {
            digits: true,
            alphabets: false,
            upperCase: false,
            specialChars: false,
        });

        // Hash the OTP
        const hash = crypto.createHash("sha256").update(otp).digest("hex");

        // Send verification email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Account Verification",
            text: `Your verification code is: ${otp}`,
        };

        await transporter.sendMail(mailOptions);

        // Save hash and expiration time in the user document
        newUser.passwordResetToken = hash;
        newUser.passwordResetExpires = Date.now() + 600000; // 10 minutes

        await newUser.save();
    } catch (error) {
        res.status(400).json({
            status: "failed",
            error: error.message,
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
    if (!userSign ||
        !(await userSign.correctPassword(password, userSign.password))
    ) {
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



export const forgotPassword = async(req, res) => {
    try {
        const { email } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                status: "failed",
                message: "User not found",
            });
        }

        // Generate a reset token
        const resetToken = crypto.randomBytes(32).toString("hex");

        // Save the reset token and expiration time in the user document
        user.passwordResetToken = crypto
            .createHash("sha256")
            .update(resetToken)
            .digest("hex");
        user.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes

        await user.save();

        // Send the password reset email
        const resetUrl = `${req.protocol}://${req.get(
        "host"
      )}/api/v1/reset-password/${resetToken}`;
        const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetUrl}.\nIf you didn't forget your password, please ignore this email!`;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Your password reset token (valid for 10 minutes)",
            text: message,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            status: "success",
            message: "Password reset email sent",
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "An error occurred while processing your request",
        });
    }
};

export const resetPassword = async(req, res) => {
    try {
        const { token } = req.params;
        const { password, passwordConfirm } = req.body;

        // Find the user with the reset token and make sure it has not expired
        const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
        const user = await User.findOne({
            passwordResetToken: hashedToken,
            passwordResetExpires: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({
                status: "failed",
                message: "Invalid or expired reset token",
            });
        }

        // Update the user's password
        user.password = password;
        user.passwordConfirm = passwordConfirm;
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save();

        // Send a confirmation email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: "Your password has been reset",
            text: "Your password for your account has been successfully reset",
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            status: "success",
            message: "Password reset successful",
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "An error occurred while processing your request",
        });
    }
};


// Delete all users
export const deleteAllUsers = async(req, res) => {
    try {
        const result = await User.deleteMany();
        res.status(200).json({
            status: 'success',
            message: `${result.deletedCount} users deleted`,
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error: error.message,
        });
    }
};