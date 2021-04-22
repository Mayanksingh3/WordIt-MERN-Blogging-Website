const router = require("express").Router();
const User = require("../models/userModel");

router.get("/following/:id", (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((foundUser) => {
      res.json(foundUser.following);
    })
    .catch((err) => {
      console.log(err);
      res.json("Not Found");
    });
});

router.put("/follower-add/:id", (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((foundUser) => {
      foundUser.following.push(req.body.followingId);
      foundUser
        .save()
        .then(() => {
          console.log("User Updated Successfully");
          res.json("Done");
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/signin", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((foundUser) => {
      if (foundUser) {
        if (foundUser.password === req.body.password) {
          console.log("User Logged In : " + foundUser.email);
          res.json({
            isLogged: true,
            username: foundUser.username,
            id: foundUser._id,
          });
        } else {
          console.log("User Entered Wrong Password");
          res.json({ isLogged: false });
        }
      } else {
        console.log("User Not Found " + req.body.email);
        res.json({ isLogged: false });
      }
    })
    .catch((err) => {
      console.log(err);
      res.json({ isLogged: false });
    });
});
router.post("/signup", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  newUser
    .save()
    .then(() => {
      console.log("User added Successfully");
      res.send({ isLogged: true });
    })
    .catch((err) => {
      console.log(err);
      res.send({ isLogged: false });
    });
});

module.exports = router;
