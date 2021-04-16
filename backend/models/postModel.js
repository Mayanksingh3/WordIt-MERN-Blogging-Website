const mongoose = require("mongoose");

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
    required: trues,
  },
});

module.exports = Post = mongoose.model("post", postSchema);
