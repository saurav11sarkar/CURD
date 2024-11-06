const Result = require("../models/result.model");
const fs = require('fs');

const postFile = async (req, res) => {
    try {
        const { title } = req.body;
        const filePath = req.file?.filename;

        if (!title || !filePath) {
            return res.status(400).json({ message: 'Title and attached file are required.' });
        }

        const newFileUpload = new Result({
            title,
            filePath
        })

        await newFileUpload.save();
        res.status(201).json({
            message:"File is upload is successfully",
            newFileUpload
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getAllFile = async(req,res)=>{
    try {
        const allFile = await Result.find();
        if(!allFile){
            return res.status(404).json({message:"This file is empty"})
        }
        res.status(200).json(allFile)
    } catch (error) {
        res.status(500).json({ message: error.message }) 
    }
}

const getOneFile = async (req,res) =>{
    try {
       const oneFile = await Result.findById(req.params.id);
       if(!oneFile){
        return res.status(404).json({message:"This file is empty"})
       } 
       res.status(200).json(oneFile);
    } catch (error) {
        res.status(500).json({ message: error.message }) 
    }
}

const putOneFile = async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        const filePath = req.file?.filename;

        const result = await Result.findById(id);
        if (!result) {
            return res.status(404).json({ message: 'Result not found.' });
        }

        // Update title if provided
        if (title) result.title = title;

        // Update file if provided
        if (filePath) {
            // Delete the old file if it exists
            if (result.filePath && fs.existsSync(result.filePath)) {
                fs.unlinkSync(result.filePath);
            }
            // Set new file path
            result.filePath = filePath;
        }

        await result.save();
        res.status(200).json({
            message: "File updated successfully",
            result
        });
    } catch (error) {
        res.status(500).json({ message: 'Error updating result.', error: error.message });
    }
}

const deleteOneFile = async (req,res)=>{
    try {
        const deleteFile  = await Result.findByIdAndDelete(req.params.id);
        if(!deleteFile){
            return res.status(404).json({message:'This file is not found'});
        }
        res.status(203).json({
            message:"File is delete successfully",
            deleteFile
        })
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
}

module.exports = {postFile, getAllFile, getOneFile, putOneFile, deleteOneFile}