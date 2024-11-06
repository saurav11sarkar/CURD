const express = require('express');
const cors = require('cors');
const studentrouter = require('./router/student.router');
const result = require('./router/result.router');
const morgan = require('morgan');
const notice = require('./router/notic.router');
const gallary = require('./router/gallary.router');
const teacher = require('./router/teacher.router');
const committee = require('./router/committee.router');
const spech = require('./router/spech.router');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))


// student router
app.use(studentrouter);
// result router
app.use(result);
// notice Bord
app.use(notice);
// teacher
app.use(teacher);
// committee
app.use(committee);
// Spech
app.use(spech)
// gallary 
app.use(gallary);



// middleware error handele
app.use((req,res)=>{
    res.status(404).json({message:"This page is not found"})
})

// middleware server error handele
app.use((err,req,res,next)=>{
    res.status(500).json({message:"server Error"})
})

module.exports = app;