import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    applicationLetter: String,
    curriculumVitae: String,
    imageName: String
});

const File = mongoose.model("File", fileSchema);

export default File;