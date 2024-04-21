const Blog = require('../model/posts');

exports.add = async (req,res)=>{
  try {
      const blog  = new Blog({
        title:req.body.title,
        description:req.body.description,
        imageUrl:req.body.imageUrl,
        date:dateFormat(Date.now())
      });

      blog.save();
      return blog;
  } catch (error) {
    console.error(error) || console.log("blog upload failed");
  }
}

function dateFormat(today){
const date = new Date(today);
const options = { month: 'long', day: 'numeric', year: 'numeric' };
const formattedDate = date.toLocaleDateString('en-US', options);
return formattedDate
}

exports.getAll = async (req,res)=>{
  try {
      const posts  = await Blog.find();
      res.send(posts)
  } catch (error) {
    console.error(error) || console.log("blog upload failed");
  }
}
