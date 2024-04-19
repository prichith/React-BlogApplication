const express = require('express');
const route = express.Router();
const blogController = require('../controller/controller');

// API 
route.get('/addPost',(req,res)=>{
    console.log("post added");
});
// route.post('/addPost',blogController.add);
// route.get('/getAll',blogController.getAll);

