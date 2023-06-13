import {

    signup,
    login,
    getAllUsers,
    getOneUser,
    forgotPassword,
    resetPassword

} from "../controllers/register"
import express from "express"

const router = express.Router();
router.post('/signup', signup);
router.post('/login', login);
router.get('/get-all', getAllUsers);
router.get('/get-one/:id', getOneUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:resetToken', resetPassword);

export default router;