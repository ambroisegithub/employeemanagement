import mongoose from "mongoose";
const fileSchema = new mongoose.Schema({

    job: {
        type: String,
        required: [true, "Job  Fiild Does Not Be Empty"]
    },


    firstname: {
        type: String,
        required: [true, "first name  Fiild Does Not Be Empty"]
    },


    familyname: {
        type: String,
        required: [true, "family name  Fiild Does Not Be Empty"]
    },

    citizenship: {
        type: String,
        required: [true, "citizenship  Fiild Does Not Be Empty"]
    },

    dateofbirth: {
        type: String,
        required: [true, "date of birth  Fiild Does Not Be Empty"]
    },

    address: {
        type: String,
        required: [true, "address  Fiild Does Not Be Empty"]
    },

    email: {
        type: String,
        required: [true, "email  Fiild Does Not Be Empty"]
    },

    phone: {
        type: String,
        required: [true, "Phone  Fiild Does Not Be Empty"]
    },

    city: {
        type: String,
        required: [true, "City  Fiild Does Not Be Empty"]
    },

    phone: {
        type: String,
        required: [true, "Phone  Fiild Does Not Be Empty"]
    },
    zipcode: {
        type: String,
        required: [true, "ZipCode  Fiild Does Not Be Empty"]
    },
    city: {
        type: String,
        required: [true, "Phone  Fiild Does Not Be Empty"]
    },

    applicationLetter: {
        type: String,
        required: [true, "application Letter  Fiild Does Not Be Empty"]
    },

    curriculumVitae: {
        type: String,
        required: [true, "curriculum Vitae Letter  Fiild Does Not Be Empty"]
    }
})

const File = mongoose.model("File", fileSchema);

export default File;