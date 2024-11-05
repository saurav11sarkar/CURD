const { getAllStudent, postStudent, getoneStudent, putonStudent, deleteonStudent } = require("../controller/student.controller");
const Student = require("../models/student.model");

const studentrouter = require("express").Router();

studentrouter.get("/api/student/", getAllStudent);
studentrouter.post("/api/student/", postStudent);
studentrouter.get("/api/student/:id", getoneStudent);
studentrouter.put("/api/student/:id", putonStudent);
studentrouter.delete("/api/student/:id", deleteonStudent);



module.exports = studentrouter;