const mongoose = require("mongoose");
const userModel = require("./userModel");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  paragraph: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  comment: {
    type: [],
  },
});

module.exports = Post = mongoose.model("post", postSchema);
