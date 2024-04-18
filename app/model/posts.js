const mongoose = require("mongoose");

let blog = new mongoose.Schema({
  heading: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  noOfComments: { type: Number },
  imageUrl: { type: String, required: true },
});

const Blog = mongoose.model("posts", blog);

module.exports = Blog;
