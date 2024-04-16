const mongoose = require('mongoose')

let blogSchema = new mongoose.Schema({
    heading : {type : String , required :true},
    date : {type : Date , required :true},
    description : {type : String , required :true},
    noOfComments : {type : Number },
    imageUrl : {type : String , required :true}
})

const Article = mongoose.model('article',blogSchema);

module.exports = Article;