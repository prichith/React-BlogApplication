const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
const path = require('path')
const connectDB = require('./connection/connection')

//load env variables
dotenv.config({path:'config.env'}) // merges them into the "process.env" object
const PORT = process.env.PORT || 8080

// mongodb connection
connectDB()

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))  //Parse incoming request bodies
app.use(bodyparser.json())  //used to deal json objects

app.listen(PORT,() => console.log(`server is running on http://localhost:${PORT}`))