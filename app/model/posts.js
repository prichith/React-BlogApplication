const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true},
  description: { type: String, required: true},
  imageUrl: { type: String, required: true},
  date: {type: String, required: true}
});

const Blog = mongoose.model("posts", blogSchema);

module.exports = Blog;

//date
// function dateFormat(today){
// // const dateString = "2024-04-21T08:53:44.293+00:00";
// const date = new Date(today);
// const options = { month: 'long', day: 'numeric', year: 'numeric' };
// const formattedDate = date.toLocaleDateString('en-US', options);
// console.log(formattedDate); // Output: April 21, 2024
// return formattedDate
// }