import multer from "multer";

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

export default upload;