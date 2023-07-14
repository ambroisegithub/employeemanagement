import multer from "multer";
import cloudinary from "cloudinary";
import File from "../models/JobApplication";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "application/pdf" || file.mimetype === "application/msword") {
        cb(null, true);
    } else {
        cb(new Error("Only DOC and PDF files are allowed"));
    }
};

const upload = multer({ storage, fileFilter });

cloudinary.config({
    cloud_name: process.env.CLOUDINARYNAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.APISECRET,
});

export const uploadFiles = async(req, res, next) => {
    try {
        const { imageName } = req.body;

        // Upload application letter to Cloudinary
        const applicationLetterResult = await cloudinary.uploader.upload(
            req.files["applicationLetter"][0].path
        );

        // Upload curriculum vitae to Cloudinary
        const curriculumVitaeResult = await cloudinary.uploader.upload(
            req.files["curriculumVitae"][0].path
        );

        // Save file information to MongoDB
        const newFile = new File({
            applicationLetter: applicationLetterResult.secure_url,
            curriculumVitae: curriculumVitaeResult.secure_url,
            imageName,
        });

        await newFile.save();

        // Return the created file data with status 201
        res.status(201).json({
            message: "Files uploaded successfully",
            file: {
                applicationLetter: newFile.applicationLetter,
                curriculumVitae: newFile.curriculumVitae,
                imageName: newFile.imageName,
            },
        });
    } catch (err) {
        next(err);
    }
};