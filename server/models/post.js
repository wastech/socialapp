var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    comments: [
      {
        text: String,
        postedBy: { type: Schema.Types.ObjectId, ref: "User" },
      },
    ],
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

var Post = mongoose.model("Post", postSchema);
module.exports = Post;
