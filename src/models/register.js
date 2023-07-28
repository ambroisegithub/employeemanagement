import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const Userschema = new mongoose.Schema({


    Usertype: {
        type: String,
        enum: ["admin", "employee", "manager"],
        default: "admin",
    },
    username: {
        type: String,
        required: [true, "The name is required"],
    },
    email: {
        type: String,
        required: [true, "The email is required"],
        validate: [validator.isEmail, "Please enter a valid email address"],
    },
    password: {
        type: String,
        required: [true, "The password field cannot be empty"],
        minLength: 6,
        maxLength: 100,
        select: false,
    },

    gender: {
        type: String,
        enum: ["male", "female"],
        default: "male",
    },
    passwordResetToken: String,
    passwordResetExpires: Date,

});

Userschema.pre("save", async function(next) {
    const user = this;
    if (!user.isModified("password")) return next();
    user.password = await bcrypt.hash(user.password, 10);
    next();
});

Userschema.methods.correctPassword = async function(cpassword, password) {
    return await bcrypt.compare(cpassword, password);
};

const user = mongoose.model("User", Userschema);

export default user;