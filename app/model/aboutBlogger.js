const mongoose = require('mongoose')

let blogger = new mongoose.Schema({
    imageUrl : {type : String , required :true},
    aboutMe : {type : Date , required :true}
})

const AboutBlogger = mongoose.model('aboutBlogger',blogger);

module.exports = AboutBlogger;