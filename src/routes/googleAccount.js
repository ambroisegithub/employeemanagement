import express from 'express';
import { getAllUsers, getUserById, updateUserById, deleteUserById } from '../controllers/googleAccount';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUserById);
router.delete('/users/:id', deleteUserById);

export default router;