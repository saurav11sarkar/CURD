const express = require('express');
const cors = require('cors');
const studentrouter = require('./router/student.router');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


// student router
app.use(studentrouter);



// middleware error handele
app.use((req,res)=>{
    res.status(404).json({message:"This page is not found"})
})

// middleware server error handele
app.use((err,req,res,next)=>{
    res.status(500).json({message:"server Error"})
})

module.exports = app;