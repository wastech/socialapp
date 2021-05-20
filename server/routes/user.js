const express = require("express");
const router = express.Router();
const requireLogin = require("../middleware/requireLogin");
const Post = require("../models/post");
const User = require("../models/user");
const uploader = require("../config/cloudinary");

router.get("/user/:id", requireLogin, (req, res) => {
  User.findById({ _id: req.params.id })
    .select("-password")
    .then((user) => {
      Post.find({ postedBy: req.params.id })
        .populate("postedBy", "_id name pic")
        .exec((err, posts) => {
          if (err) {
            return res.status(422).json({ error: err });
          }
          res.json({ user, posts });
        });
    })
    .catch((err) => {
      return res.status(404).json({ error: "User not found" });
    });
});

router.get("/me", requireLogin, (req, res) => {
  User.findById({ _id: req.user._id })
    .populate("post ")
    .populate("followers", "_id name pic")
    .select("-password")
    .exec(function (err, user) {
      if (err)
        return res
          .status(500)
          .json({ message: "The server was unable to complete your request." });

      res.status(200).json(user);
    });
});

router.put("/:id/follow",  async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json({ message: "user has been followed" });
      } else {
        res.status(403).json({ message: "you allready follow this user" });
      }
    } catch (error) {
      res.status(500).json(error);
      console.log("err", error);
    }
  } else {
    res.status(403).json({ message: "you cant follow yourself" });
  }
});

router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json({ message: "user has been unfollowed" });
      } else {
        res.status(403).json({ message: "you dont follow this user" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json({ message: "you cant unfollow yourself" });
  }
});

router.get("/friends/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return User.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, name, pic } = friend;
      friendList.push({ _id, name, pic });
    });
    res.status(200).json(friendList);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/updatepic", uploader.single("pic"), requireLogin, (req, res) => {
  const pic = req.file.path;

  User.findByIdAndUpdate(
    req.user._id,
    { $set: { pic } },
    { new: true },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: "pic canot post" });
      }
      res.json({ message: "updated successfully", result });
    }
  );
});

router.post("/search-users", (req, res) => {
  let userPattern = new RegExp("^", req.body.email);
  User.find({ email: { $regex: userPattern } })
    .select("_id email")
    .then((user) => {
      res.json({ user });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
