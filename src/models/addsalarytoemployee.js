import mongoose from "mongoose"

const addSalarySchema = new mongoose.Schema({

    employeeCode: {
        type: "String",
        required: [true, "The Code Of employee is required"]
    },
    month: {
        type: "String",
        required: [true, "the month is required"],

    },

    year: {
        type: "String",
        required: [true, "the year is required"]
    },

    amountpaid: {
        type: "String",
        required: [true, "the amountpaid is required"],


    }

})


const AddSalaryToEmployeeModel = mongoose.model("AddSalary", addSalarySchema)

export default AddSalaryToEmployeeModel;