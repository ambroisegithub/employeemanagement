import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
import Register from "../models/register"

const signToken = (id) => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: "10h",
    });
};
export const signup = async(req, res) => {
    try {
        // Check if email already exists
        const userExists = await Register.findOne({ email: req.body.email });
        if (userExists) {
            return res.status(400).json({
                status: "failed",
                message: "User are Already Exists",
            });
        }

        // Create the user
        const user = await Register.create({
            username: req.body.username,
            email: req.body.email,
            Usertype: req.body.Usertype,

            gender: req.body.gender
        });

        // Generate a token for the user
        const token = signToken(user._id);
        res.status(200).json({
            status: "success",
            token: token,
            user,
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            error: err.message,
        });
    }
};


export const login = async(req, res) => {
    const { studentemail, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
        return res.status(400).json({
            status: "failed",
            message: "Please provide email and password",
        });
    }

    const userSign = await Register.findOne({ email }).select("+password");
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
        const allUsers = await Register.find();

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
        const user = await Register.findById(req.params.id);
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