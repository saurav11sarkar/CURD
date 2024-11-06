const NotiedBord = require("../models/notice.model")

const postNotice = async (req,res)=>{
    try {
        const title = req.body.title;
        const description = req.body.description;
        const newPost = new NotiedBord({
            title,description
        });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getAllNotice = async(req,res)=>{
    try {
        const allNotice = await NotiedBord.find();
        res.status(200).json(allNotice);
    } catch (error) {
        res.status(500).json({message:error.message}); 
    }
}

const getOneNotice = async (req,res) =>{
    try {
        const oneNotice = await NotiedBord.findById(req.params.id);
        if(!oneNotice){
            return res.status(400).json({message:"Not found the Id"})
        }
        res.status(200).json(oneNotice);
    } catch (error) {
        res.status(500).json({message:error.message}); 
    }
}

const putOneNotice = async (req,res)=>{
    try {
       const updateNotice = await NotiedBord.findById(req.params.id);
       updateNotice.title = req.body.title;
       updateNotice.description = req.body.description;
       
       await updateNotice.save();
       res.status(201).json({
        message:"Update is successfully",
        updateNotice
       })
    } catch (error) {
        res.status(500).json({message:error.message}); 
    }
}

const deleteNotice = async (req,res) =>{
    try {
        const deleteNoticeone  = await NotiedBord.findByIdAndDelete(req.params.id);
        if(!deleteNoticeone){
            return res.status(404).json({message:'This file is not found'});
        }
        res.status(203).json({
            message:"File is delete successfully",
            deleteFile: deleteNoticeone
        })
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
}

module.exports = {postNotice, getAllNotice, getOneNotice, putOneNotice, deleteNotice}