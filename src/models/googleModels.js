import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name is required'],
    },
    email: {
        type: String,
        required: [true, 'The email is required'],
        unique: true,
    },

    image: {
        type: String,
    }
});

const UserGoogle = mongoose.model('UserGoogle', userSchema);

export default UserGoogle;