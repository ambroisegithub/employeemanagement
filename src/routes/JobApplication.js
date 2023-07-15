import express from "express";
import upload from "../helpers/multer";
import { uploadFiles, getAllFiles, getFileById, deleteAllFiles, deleteFileById, updateFileById } from "../controllers/JobApplication";

const router = express.Router();

router.post(
    "/upload",
    upload.fields([
        { name: "applicationLetter", maxCount: 1 },
        { name: "curriculumVitae", maxCount: 1 },
    ]),
    uploadFiles
);

router.get("/get-allApplied", getAllFiles)
router.get("/getone-applied/:id", getFileById);
router.delete("/deleteAllapplied", deleteAllFiles);
router.delete("/deleteone-applied/:id", deleteFileById);
router.put("/update-OneApplied/:id", upload.fields([
    { name: "applicationLetter", maxCount: 1 },
    { name: "curriculumVitae", maxCount: 1 },
]), updateFileById);

export default router;