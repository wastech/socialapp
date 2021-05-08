const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const express = require("express");
const multer = require("multer");

const app = express();
//require("dotenv").config();

cloudinary.config({
  cloud_name: "wastech",
  folder: "profile-pictures",
  api_key: "365496934417421",
  api_secret: "mJaPuAL7fmZKuR6tVZi53zXkQ7E",
});

var storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  allowedFormats: ["jpg", "png", "mp3"],
  filename: function (req, file, cb) {
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  },
  // transformation: [{ width: 500, height: 500, crop: "limit" }],
});

var uploader = multer({ storage: storage });

module.exports = uploader;
