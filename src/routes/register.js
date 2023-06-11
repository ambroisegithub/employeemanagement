import {

    signup,
    login,
    getAllUsers,
    getOneUser

} from "../controllers/register"
import express from "express"

const router = express.Router();
router.post('/signup', signup);
router.post('/login', login);
router.get('/get-all', getAllUsers);
router.get('/get-one/:id', getOneUser);



export default router;