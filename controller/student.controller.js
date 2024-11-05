const Student = require("../models/student.model");

const getAllStudent = async (req, res) => {
    try {
        const student = await Student.find();
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const postStudent = async (req, res) => {
    try {
        const postStidentAll = new Student({
            name: req.body.name,
            class: req.body.class,
            fatherName: req.body.fatherName,
            motherName: req.body.motherName,
            address: req.body.address,
            mobile: req.body.mobile
        })

        await postStidentAll.save();
        res.status(201).json(postStidentAll);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getoneStudent = async (req, res) => {
    try {
        const oneStudent = await Student.findById(req.params.id);
        if (!oneStudent) {
           return res.status(404).json({ message: 'This id not create' })
        }
        res.status(200).json(oneStudent)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const putonStudent = async (req,res)=>{
    try {
        const oneStudentupdate = await Student.findById(req.params.id);
        if (!oneStudentupdate) {
           return res.status(404).json({ message: 'This id is missing' })
        } 
        oneStudentupdate.name = req.body.name;
        oneStudentupdate.class = req.body.class;
        oneStudentupdate.fatherName = req.body.fatherName;
        oneStudentupdate.motherName = req.body.motherName;
        oneStudentupdate.address = req.body.address;
        oneStudentupdate.mobile = req.body.mobile;

        await oneStudentupdate.save();
        res.status(201).json({
            success: 'Update is successfully',
            oneStudentupdate
        })

    } catch (error) {
        res.status(500).json({ message: error.message }) 
    }
}

const deleteonStudent = async (req,res)=>{
    try {
        const oneStudentDelete = await Student.findByIdAndDelete(req.params.id);      
        res.status(203).json({
            success: 'Delete is successfully',
            oneStudentDelete
        })

    } catch (error) {
        res.status(500).json({ message: error.message }) 
    }
}

module.exports = { getAllStudent, postStudent,getoneStudent, putonStudent, deleteonStudent }