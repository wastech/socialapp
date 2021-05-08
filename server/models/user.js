const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetToken: String,
  expireToken: Date,
  pic: {
    type: String,
    default:
      "https://image.shutterstock.com/image-photo/head-shoulders-portrait-young-african-260nw-388588540.jpg",
  },
  followers: [{ type: ObjectId, ref: "User" }],
  following: [{ type: ObjectId, ref: "User" }],
  following: [{ type: ObjectId, ref: "Post" }],
  nationality: {
    type: String,
  },
  bio: {
    type: String,
  },
  city: {
    type: String,
  },
  status: {
    type: String,
  },
  fullName: {
    type: String,
  },
});

mongoose.model("User", userSchema);
