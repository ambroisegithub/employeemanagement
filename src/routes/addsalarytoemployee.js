import { AddSalary, GetAllSalary, getOneSalary, deleteSalary, updateSalary } from "../controllers/addsalarytoemployee"
import express from "express"
const router = express.Router();
router.post("/add-salary", AddSalary);
router.get('/getall-salary', GetAllSalary);
router.get('/getone-salary/:id', getOneSalary);
router.delete('/delete-salary/:id', deleteSalary);
router.put('/update-salary/:id', updateSalary);
export default router