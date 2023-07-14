import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import registerRoutes from "./routes/register";
import employeeRoutes from "./routes/addemploye";
import contactusRoutes from "./routes/contactus";
import JobApplicationRoutes from "./routes/JobApplication"
import addsalarytoemployeeRoutes from "./routes/addsalarytoemployee"


const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    return res.status(200).json({
        status: "success",
        message: "Welcome to the employee management system",
    });
});

app.use("/api/v1", registerRoutes);
app.use("/api/v1", employeeRoutes);
app.use("/api/v1", contactusRoutes);
app.use("/api/v1", addsalarytoemployeeRoutes);
app.use("/api/v1", JobApplicationRoutes);




export default app;