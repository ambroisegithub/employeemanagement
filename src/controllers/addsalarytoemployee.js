import AddSalaryToEmployeeModel from "../models/addsalarytoemployee";

import addemployeeModel from "../models/addemploye"


export const AddSalary = async(req, res) => {



        // try {
        const { employeeCode, month, year, amountpaid } = req.body;

        // Check if the employee with the given employeeCode exists
        const employee = await addemployeeModel.findOne({ employeeCode });
        if (!employee) {
            return res.status(404).json({
                status: "failed",
                message: "Employee not found",
            });
        }

        // Create the salary entry
        const newAddSalaryToEmployee = await AddSalaryToEmployeeModel.create({
            employee: employee._id, // Assign the employee's ID to the salary entry
            month,
            year,
            amountpaid,
        });

        res.status(201).json({
            status: "success",
            newAddSalaryToEmployee,
            message: "Salary added successfully",
        });
        // } catch (err) {
        res.status(400).json({
            status: "failed",
            error: err.message,
        });
        // }



        // try {
        // const AddSalaryToEmployee = new AddSalaryToEmployeeModel({
        //     addemployeeId: req.params._Id,
        //     req.body,
        // })
        // const newAddSalaryToEmployee = await AddSalaryToEmployee.save();
        // const employeeCode1 = await addemployeeModel.find(req.body.employeeCode);
        // const employeeCode = await AddSalaryToEmployeeModel.find(req.body.employeeCode);


        // if (employeeCode1 !== employeeCode) {

        //     return res.status(400).json({
        //         status: "Failed",
        //         message: "enable to add Salary to employee cause of mismatch of employee codes"
        //     })
        // }



        // const newAddSalaryToEmployee = await AddSalaryToEmployeeModel.create({
        //     employeeCode: req.body.employeeCode,
        //     month: req.body.month,
        //     year: req.body.year,
        //     amountpaid: req.body.amountpaid,

        // })
        // res.status(201).json({
        //     status: "success",
        //     newAddSalaryToEmployee: newAddSalaryToEmployee,
        //     message: "Salary Added sucusessfully"
        // });
        // } catch (err) {
        // res.status(400).json({
        //     status: "failed",
        //     error: err.message,
        // });
    }
    // };

export const GetAllSalary = async(req, res) => {
    try {
        const AllSalary = await AddSalaryToEmployeeModel.find();
        console.log("AllSalary:", AllSalary);
        return res.status(200).json({
            status: "success",
            number: AllSalary.length,
            AllSalary,
        });
    } catch (error) {
        return res.status(404).json({
            status: "failed",
            error: error.message,
        });
    }
};


export const getOneSalary = async(req, res) => {
    try {

        const id = req.params.id;
        const OneSalary = await AddSalaryToEmployeeModel.findById(id)

        if (!OneSalary) {
            return res.status(404).json({
                status: "failed",
                message: "Salary not  Found"
            })
        }
        res.status(200).json({

            status: "sucusses",
            data: {
                OneSalary: OneSalary,

            },
            message: "All info One Salary Employee"
        })

    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: err.message
        })
    }


}
export const deleteSalary = async(req, res) => {
    try {
        const id = req.params.id;
        const deletedSalary = await AddSalaryToEmployeeModel.findByIdAndDelete(id);

        if (!deletedSalary) {
            return res.status(404).json({
                status: "failed",
                message: "Salary not found",
            });
        }

        res.status(200).json({
            status: "success",
            message: "Salary deleted successfully",
        });
    } catch (err) {
        return res.status(400).json({
            status: "failed",
            message: err.message,
        });
    }
};

export const updateSalary = async(req, res) => {
    try {
        const id = req.params.id;
        const updatedSalary = await AddSalaryToEmployeeModel.findByIdAndUpdate(
            id,
            req.body, { new: true }
        );

        if (!updatedSalary) {
            return res.status(404).json({
                status: "failed",
                message: "Salary not found",
            });
        }

        res.status(200).json({
            status: "success",
            updatedSalary: updatedSalary,
            message: "Salary updated successfully",
        });
    } catch (err) {
        return res.status(400).json({
            status: "failed",
            message: err.message,
        });
    }
}