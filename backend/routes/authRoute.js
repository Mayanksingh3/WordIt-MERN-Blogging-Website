const router = require("express").Router();
const User = require("../models/userModel");

router.post("/signin", (req, res) => {
  User.find({ username: req.body.email })
    .then(() => {
      console.log("user found : " + req.body.email);
      res.json({ logged: true });
    })
    .catch((err) => {
      console.log(err);
      res.json({ logged: false });
    });
});
router.post("/signup", (req, res) => {});
