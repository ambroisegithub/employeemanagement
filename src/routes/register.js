import {

    signup,
    login,
    getAllUsers,
    getOneUser,
    forgotPassword,
    resetPassword,
    deleteAllUsers

} from "../controllers/register"

import { protect } from "../middlewares/authMiddleware"

import express from "express"

const router = express.Router();
router.post('/signup', signup);
router.post('/login', login);
router.get('/get-all', getAllUsers);
router.get('/get-one/:id', getOneUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.delete('/deleteAllusers', deleteAllUsers);

export default router;