
const Blog = require('../model/posts');

exports.add = async(data)=>{
    const data  = new Blog(data);
    let result = await Blog.save();
    return result;
}
exports.getAll = async()=>{
    const result  = await Blog.find();
    return result;
}