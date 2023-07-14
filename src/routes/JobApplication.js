import express from "express";
import upload from "../helpers/multer";
import { uploadFiles } from "../controllers/JobApplication";

const router = express.Router();

router.post(
    "/upload",
    upload.fields([
        { name: "applicationLetter", maxCount: 1 },
        { name: "curriculumVitae", maxCount: 1 },
    ]),
    uploadFiles
);

export default router;