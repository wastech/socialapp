const express = require("express");
const router = express.Router();
const requireLogin = require("../middleware/requireLogin");

const Post = require("../models/post");
const User = require("../models/user");
const uploader = require("../config/cloudinary");

router.get("/allpost", requireLogin, async (req, res) => {
  try {
    let pagination = 9;
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const count = await Post.find({}).countDocuments();
    let posts = await Post.find({}) // TODO: Paginate
      .populate("postedBy", "_id name pic nationality city")
      .populate("comments.postedBy", "_id name")
      .sort("-createdAt")
      .skip((page - 1) * pagination) // in the first page the value of the skip is 0
      .limit(pagination);
    // output just 9 items
    res.json({
      count: count,
      current_page: page,
      posts,
      last_page: Math.ceil(count / pagination),
      per_page: req.query.pagination,
      // TODO: Plural
    });
  } catch (err) {
    res.status(400).json({
      success: false, // TODO: Not needed when you use the correct status codes
      message: err.message,
    });
  }
});

router.get("/getsubpost", requireLogin, (req, res) => {
  // if postedBy in following
  Post.find({ postedBy: { $in: req.user.following } })
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .sort("-createdAt")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post(
  "/createpost",
  requireLogin,
  uploader.single("photo"),
  (req, res) => {
    const { body } = req.body;
    const photo = req.file.path;
    if (!body || !photo) {
      return res.status(422).json({ error: "Plase add all the fields" });
    }
    req.user.password = undefined;
    const post = new Post({
      body,
      photo,
      postedBy: req.user,
    });

    post
      .save()
      .then((result) => {
        res.json({ post: result, message: "post successfully ceated " });
      })
      .catch((error) => {
        res.status(500).json({
          message: `An error has occured ${error}`,
        });
      });
  }
);

router.get("/mypost", requireLogin, (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("postedBy")
    .then((mypost) => {
      res.json({ mypost });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/post/:id", requireLogin, (req, res) => {
  Post.findById({ _id: req.params.id })
    .populate("postedBy", "_id name pic")
    .populate("comments.postedBy", "_id name pic")
    .then((post) => {
      res.json({ post });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/like", requireLogin, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { likes: req.user._id },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});
router.put("/unlike", requireLogin, (req, res) => {
  Post.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { likes: req.user._id },
    },
    {
      new: true,
    }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

router.put("/comment", requireLogin, (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.user._id,
  };
  Post.findByIdAndUpdate(
    req.body.id,
    {
      $push: { comments: comment },
    },
    {
      // upsert: true,
      new: true,
    }
  )
    .populate("comments.postedBy", "_id name pic")
    .populate("postedBy", "_id name pic")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json({ result: result, message: "created successfully" });
      }
    });
});

router.delete("/deletepost/:postId", requireLogin, (req, res) => {
  Post.findOne({ _id: req.params.postId })
    .populate("postedBy", "_id")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(422).json({ error: err });
      }
      if (post.postedBy._id.toString() === req.user._id.toString()) {
        post
          .remove()
          .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
});

module.exports = router;
