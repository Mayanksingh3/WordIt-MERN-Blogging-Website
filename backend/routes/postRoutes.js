const router = require("express").Router();
const Post = require("../models/postModel");
router.get("/", (req, res) => {
  Post.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.status(400).res.json({ Error: "${err}" });
    });
});

router.post("/create", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    paragraph: req.body.paragraph,
  });
  newPost
    .save()
    .then(() => {
      console.log("Post added Successfully");
      res.send("Done");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      console.log(post);
      res.json(post);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/update/:id", (req, res) => {
  Post.findById(req.params.id).then((post) => {
    post.title = req.body.title;
    post.paragraph = req.body.paragraph;

    post
      .save()
      .then(() => {
        res.json("Successfully updated : " + req.params.id);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.delete("/delete/:id", (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("Post Deleted " + req.params.id);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
