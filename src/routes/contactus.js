import express from "express"
import {
    getSinglecontact,
    deletecontact,
    updatecontact,
    Createcontact,
    getAllcontact,
    replyContact
} from "../controllers/contactus"

const router = express.Router();
router.post("/reply-contact/:id", replyContact);
router.post("/create-contact", Createcontact)
router.get("/getAllcontact", getAllcontact);
router.route("/contact/:id").get(getSinglecontact).delete(deletecontact);
router.route("/contact1/:id").delete(deletecontact);
router.patch("/updatecontact/:id", updatecontact);

export default router