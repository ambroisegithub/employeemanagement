import AddSalaryToEmployeeModel from "../models/addsalarytoemployee";

export const AddSalary = async(req, res) => {
    try {
        const AddSalaryToEmployee = new AddSalaryToEmployeeModel(req.body);
        const newAddSalaryToEmployee = await AddSalaryToEmployee.save();

        res.status(201).json({
            status: "success",
            newAddSalaryToEmployee: newAddSalaryToEmployee,
            message: "Salary Added sucusessfully"
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            error: err.message,
        });
    }
};

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
};