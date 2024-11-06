const { getAllTeacher, postTeacher, getOneTeacher, putTeacher, deleteTeacher } = require('../controller/teacher.controller');

const teacher = require('express').Router();

teacher.get('/api/teacher',getAllTeacher);
teacher.post('/api/teacher',postTeacher);
teacher.get('/api/teacher/:id',getOneTeacher);
teacher.put('/api/teacher/:id',putTeacher);
teacher.delete('/api/teacher/:id',deleteTeacher);


module.exports = teacher;