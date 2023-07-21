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
        const { job, firstname, familyname, citizenship, dateofbirth, address, email, phone, zipcode, city } = req.body;

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
            job,
            firstname,
            familyname,
            citizenship,
            dateofbirth,
            address,
            email,
            phone,
            zipcode,
            city,
            applicationLetter: applicationLetterResult.secure_url,
            curriculumVitae: curriculumVitaeResult.secure_url
        });

        await newFile.save();

        console.log(newFile)

        res.status(201).json({
            message: "Files uploaded successfully",
            file: {

                job: newFile.job,
                firstname: newFile.firstname,
                familyname: newFile.familyname,
                citizenship: newFile.citizenship,
                dateofbirth: newFile.dateofbirth,
                address: newFile.address,
                email: newFile.email,
                phone: newFile.phone,
                zipcode: newFile.zipcode,
                city: newFile.city,
                applicationLetter: newFile.applicationLetter,
                curriculumVitae: newFile.curriculumVitae
            },

        });
    } catch (err) {
        next(err);
    }
};


export const getAllFiles = async(req, res, next) => {
    try {
        const files = await File.find();

        res.status(200).json({
            message: "Successfully retrieved files",
            files,
        });
    } catch (err) {
        next(err);
    }
};

export const getFileById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const file = await File.findById(id);

        if (!file) {
            return res.status(404).json({
                message: "File not found",
            });
        }

        res.status(200).json({
            message: "Successfully retrieved file",
            file,
        });
    } catch (err) {
        next(err);
    }
};

export const deleteAllFiles = async(req, res, next) => {
    try {
        await File.deleteMany();

        res.status(200).json({
            message: "All files deleted successfully",
        });
    } catch (err) {
        next(err);
    }
};

export const deleteFileById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const file = await File.findByIdAndDelete(id);

        if (!file) {
            return res.status(404).json({
                message: "File not found",
            });
        }

        res.status(200).json({
            message: "File deleted successfully",
        });
    } catch (err) {
        next(err);
    }
};
export const updateFileById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const { job, firstname, familyname, citizenship, dateofbirth, address, email, phone, zipcode, city } = req.body;

        const file = await File.findById(id);

        if (!file) {
            return res.status(404).json({
                message: "File not found",
            });
        }


        file.job = job;
        file.firstname = firstname;
        file.familyname = familyname;
        file.citizenship = citizenship;
        file.dateofbirth = dateofbirth;
        file.address = address;
        file.email = email;
        file.phone = phone;
        file.zipcode = zipcode;
        file.city = city;

        // Handle file updates if provided
        if (req.files) {
            if (req.files["applicationLetter"]) {
                const applicationLetterResult = await cloudinary.uploader.upload(req.files["applicationLetter"][0].path);
                file.applicationLetter = applicationLetterResult.secure_url;
            }

            if (req.files["curriculumVitae"]) {

                const curriculumVitaeResult = await cloudinary.uploader.upload(req.files["curriculumVitae"][0].path);
                file.curriculumVitae = curriculumVitaeResult.secure_url;
            }
        }

        await file.save();

        res.status(200).json({
            message: "File updated successfully",
            file,
        });
    } catch (err) {
        next(err);
    }
};