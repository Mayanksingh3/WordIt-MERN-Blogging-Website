const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  following: {
    type: [String],
    default: [],
  },
});

module.exports = User = mongoose.model("user", userSchema);
