import { Addemployee, GetAllEmployee, getOneEmployee, deleteEmployee, updateEmployee } from "../controllers/addemployee"
import express from "express"
const router = express.Router();
router.post("/addEmployee", Addemployee);
router.get('/getall-employee', GetAllEmployee);
router.get('/getall-employee', GetAllEmployee);
router.get('/getone-employee/:id', getOneEmployee);
router.delete('/delete-employee/:id', deleteEmployee);
router.put('/update-employee/:id', updateEmployee);

export default router