const router = require("express").Router();
const User = require("../models/userModel");

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
          console.log(req.body.email + " Entered Wrong Password");
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
  User.findOne({ email: req.body.email })
    .then((found) => {
      if (found) {
        console.log("User Already Present with email : " + req.body.email);
        res.send({ isLogged: false });
      } else {
        newUser
          .save()
          .then((e) => {
            console.log("User added Successfully " + e.email);
            res.send({ isLogged: true, id: e._id });
          })
          .catch((err) => {
            console.log(err);
            res.send({ isLogged: false });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({ isLogged: false });
    });
});

module.exports = router;
