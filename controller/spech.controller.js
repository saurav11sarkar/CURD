const Spech = require("../models/spech.model");


const postSpech = async (req,res)=>{
    try {
        const title = req.body.title;
        const description = req.body.description;
        const newPost = new Spech({
            title,description
        });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getAllSpech = async(req,res)=>{
    try {
        const allSpech = await Spech.find();
        res.status(200).json(allSpech);
    } catch (error) {
        res.status(500).json({message:error.message}); 
    }
}

const getOneSpech = async (req,res) =>{
    try {
        const oneSpech = await Spech.findById(req.params.id);
        if(!oneSpech){
            return res.status(400).json({message:"Not found the Id"})
        }
        res.status(200).json(oneSpech);
    } catch (error) {
        res.status(500).json({message:error.message}); 
    }
}

const putSpech = async (req,res)=>{
    try {
       const updateSpech = await Spech.findById(req.params.id);
       updateSpech.title = req.body.title;
       updateSpech.description = req.body.description;
       
       await updateSpech.save();
       res.status(201).json({
        message:"Update is successfully",
        updateNotice: updateSpech
       })
    } catch (error) {
        res.status(500).json({message:error.message}); 
    }
}

const deleteSpech = async (req,res) =>{
    try {
        const deleteSpech  = await Spech.findByIdAndDelete(req.params.id);
        if(!deleteSpech){
            return res.status(404).json({message:'This file is not found'});
        }
        res.status(203).json({
            message:"File is delete successfully",
            deleteFile: deleteSpech
        })
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
}

module.exports = {postSpech, getAllSpech, getOneSpech, putSpech, deleteSpech}