import mongoose from "mongoose"

const addEmployeSchema = new mongoose.Schema({

    employeeCode: {
        type: "String",
        required: [true, "The Code Of employee is required"]
    },
    salution: {
        type: "String",
        required: [true, "the salution is required"],

        enum: ["Mr", "Mrs", "Miss", "Mis"],

        default: "Mr"

    },

    status: {
        type: "String",
        required: [true, "the status is required"]
    },

    department: {
        type: "String",
        required: [true, "the department is required"],
        enum: ['It', 'Finance', 'Security'],
        default: "It"

    },

    firstname: {
        type: "String",
        required: [true, "the firstname is required"]
    },

    lastname: {
        type: "String",
        required: [true, "the lastname is required"]
    },

    gender: {
        type: "String",
        required: [true, "the salution is required"],
        enum: ["Male", "Female"],
        default: "Male"

    },

    landline: {
        type: "String",
        require: [true, "the landline is required"]
    },


    phoneNumber: {
        type: "String",
        require: [true, "the   phone Number is required"]
    },
    employeeAddress: {
        type: "String",
        required: [true, "employee Address does not be empty"],

    },
    village: {
        type: "String",
        required: [true, "the  village of employee is required"]
    },

    city: {
        type: "String",
        required: [true, "The city of employee is required"]
    },

    country: {
        type: "String",
        required: [true, "The Country of employee is required"]
    }

})


const AddEmployeeModel = mongoose.model("AddEmployee", addEmployeSchema)

export default AddEmployeeModel;