const express = require('express');
const route = express.Router();
const blogController = require('../controller/controller');

// API 
route.post('/addPost',blogController.add);
route.get('/getAll',blogController.getAll);

