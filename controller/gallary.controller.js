const fs = require('fs');
const Image = require('../models/gallary.model');

const postgallary = async (req, res) => {
    try {
        const { title } = req.body;
        const imageUrl = req.file?.filename;

        if (!title || !imageUrl) {
            return res.status(400).json({ message: 'Title and attached file are required.' });
        }
        const newImage = new Image({
            title,
            imageUrl
        })
        await newImage.save();
        res.status(201).json({
            message: "File is upload is successfully",
            newImage
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getAllGallary = async (req, res) => {
    try {
        const allGallary = await Image.find();
        if (!allGallary) {
            return res.status(404).json({ message: "Not found file" })
        }
        res.status(200).json(allGallary);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getOneGallary = async (req, res) => {
    try {
        const oneGallary = await Image.findById(req.params.id);
        if (!oneGallary) {
            return res.status(404).json({ message: "Not found file" })
        }
        res.status(200).json(oneGallary);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const putGallary = async (req, res) => {
    try {
        const { title } = req.body;
        const imageUrl = req.file?.filename;
        const image = await Image.findById(req.params.id);

        if (!image) {
            return res.status(404).json({ message: 'Image not found.' });
        }

        if (title) image.title = title;
        if (imageUrl) {
            if (image.imageUrl && fs.existsSync(`uploads/${image.imageUrl}`)) {
                fs.unlinkSync(`uploads/${image.imageUrl}`);
            }
            image.imageUrl = imageUrl;
        }

        await image.save();
        res.status(200).json({ message: "Image updated successfully", image });
    } catch (error) {
        res.status(500).json({ message: 'Error updating image.', error: error.message });
    }
};

const deleteGallary = async(req,res)=>{
    try {
        const deleteImage  = await Image.findByIdAndDelete(req.params.id);
        if(!deleteImage){
            return res.status(404).json({message:'This file is not found'});
        }
        res.status(203).json({
            message:"File is delete successfully",
            deleteFile: deleteImage
        })
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
}


module.exports = { postgallary, getAllGallary, getOneGallary, putGallary,deleteGallary };