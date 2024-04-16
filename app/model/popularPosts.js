const mongoose = require('mongoose')

let popularPostSchema = new mongoose.Schema({
    heading : {type : String , required :true},
    title : {type : String , required :true},
    imageUrl : {type : Date , required :true}
})

const PopularPosts = mongoose.model('popularPosts',popularPostSchema);

module.exports = PopularPosts;