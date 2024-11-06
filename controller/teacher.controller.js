const Teacher = require("../models/Teacher.model")

const postTeacher = async(req,res)=>{
    try {
        const newTeacher = new Teacher({
            name:req.body.name,
            fatherName:req.body.fatherName,
            designation:req.body.designation,
            address:req.body.address,
            mobile:req.body.mobile,
        });

        await newTeacher.save();
        res.status(201).json(newTeacher)       
    } catch (error) {
      res.status(500).json({message:message.error})  
    }
}

const getAllTeacher = async(req,res)=>{
    try {
       const allTeacher = await Teacher.find();
       res.status(200).json(allTeacher); 
    } catch (error) {
        res.status(500).json({message:message.error})
    }
}

const getOneTeacher = async(req,res)=>{
    try {
        const oneTeacher = await Teacher.findById(req.params.id);
        if(!oneTeacher){
            return res.status(404).json({message:"this teacher is not create"})
        }
        res.status(200).json(oneTeacher)
    } catch (error) {
        res.status(500).json({message:message.error})
    }
}

const putTeacher = async (req,res) =>{
    try {
        const updateTeacher = await Teacher.findById(req.params.id);
        if(!updateTeacher){
            return res.status(404).json({message:"this teacher is not create"})
        }
        updateTeacher.name = req.body.name;
        updateTeacher.fatherName = req.body.fatherName;
        updateTeacher.designation = req.body.designation;
        updateTeacher.address = req.body.address;
        updateTeacher.mobile = req.body.mobile;

        await updateTeacher.save();
        res.status(201).json({
            message:"Update is successfully",
            updateTeacher
        });
    } catch (error) {
        res.status(500).json({message:message.error})
    }
}

const deleteTeacher = async (req,res)=>{
    try {
        const deleteTeacher = await Teacher.findByIdAndDelete(req.params.id);
        if(!deleteTeacher){
            return res.status(404).json({message:"this teacher is not create"})
        }
        res.status(203).json({
            message:'delete is successfully',
            deleteTeacher
        })
    } catch (error) {
        res.status(500).json({message:message.error})
    }
}

module.exports = {postTeacher,getAllTeacher,getOneTeacher,putTeacher,deleteTeacher}