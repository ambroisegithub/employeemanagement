import AddEmployeeModel from "../models/addemploye";

export const Addemployee = async(req, res) => {
    try {
        const addemployee = new AddEmployeeModel(req.body);
        const newaddemployee = await addemployee.save();

        res.status(201).json({
            status: "success",
            newemployee: newaddemployee,
            message: "Employee Added sucusessfully"
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            error: err.message,
        });
    }
};

export const GetAllEmployee = async(req, res) => {
    try {
        const AllEmployee = await AddEmployeeModel.find();
        console.log("AllEmployee:", AllEmployee);
        return res.status(200).json({
            status: "success",
            number: AllEmployee.length,
            AllEmployee,
        });
    } catch (error) {
        return res.status(404).json({
            status: "failed",
            error: error.message,
        });
    }
};


export const getOneEmployee = async(req, res) => {
    try {

        const id = req.params.id;
        const OneEmploye = await AddEmployeeModel.findById(id)

        if (!OneEmploye) {
            return res.status(404).json({
                status: "failed",
                message: "Employee not  Found"
            })
        }
        res.status(200).json({

            status: "sucusses",
            data: {
                OneEmploye: OneEmploye,

            },
            message: "All info About Employee"
        })

    } catch (err) {
        return res.status(400).json({
            status: "fail",
            message: err.message
        })
    }


}
export const deleteEmployee = async(req, res) => {
    try {
        const id = req.params.id;
        const deletedEmployee = await AddEmployeeModel.findByIdAndDelete(id);

        if (!deletedEmployee) {
            return res.status(404).json({
                status: "failed",
                message: "Employee not found",
            });
        }

        res.status(200).json({
            status: "success",
            message: "Employee deleted successfully",
        });
    } catch (err) {
        return res.status(400).json({
            status: "failed",
            message: err.message,
        });
    }
};

export const updateEmployee = async(req, res) => {
    try {
        const id = req.params.id;
        const updatedEmployee = await AddEmployeeModel.findByIdAndUpdate(
            id,
            req.body, { new: true }
        );

        if (!updatedEmployee) {
            return res.status(404).json({
                status: "failed",
                message: "Employee not found",
            });
        }

        res.status(200).json({
            status: "success",
            updatedEmployee: updatedEmployee,
            message: "Employee updated successfully",
        });
    } catch (err) {
        return res.status(400).json({
            status: "failed",
            message: err.message,
        });
    }
};