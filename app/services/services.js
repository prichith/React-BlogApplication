
const Blog = require('../model/posts');

exports.add = async(data)=>{
    try {
    const data  = new Blog(data);
    let result = await Blog.save();
    return result;        
    } catch (error) {
        console.error(error);
    }

}
exports.getAll = async()=>{
    const result  = await Blog.find();
    return result;
}