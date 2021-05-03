const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const express = require("express");
const multer = require("multer");

const app = express();
//require("dotenv").config();

cloudinary.config({
  cloud_name: "wastech",
  api_key: "365496934417421",
  api_secret: "mJaPuAL7fmZKuR6tVZi53zXkQ7E",
});

var storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  allowedFormats: ["jpg", "png", "mp3"],
  // transformation: [{ width: 500, height: 500, crop: "limit" }],
});

var uploader = multer({ storage: storage });

module.exports = uploader;
