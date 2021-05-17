var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
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
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  
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

var User = mongoose.model("User", userSchema);
module.exports = User;
