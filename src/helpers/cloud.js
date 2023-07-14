import cloudinary from "cloudinary"
import dotenv from "dotenv";
dotenv.config();
// cloudinary.v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARYNAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.APISECRET,
});