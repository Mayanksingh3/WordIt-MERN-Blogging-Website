const router = require("express").Router();

router.post("/", (req, res) => {
  res.send("Hello");
});

module.exports = router;
