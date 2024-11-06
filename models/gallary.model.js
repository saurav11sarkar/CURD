const mongoose = require('mongoose');



const imageSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [5, 'Title must be at least 5 characters long'], 
    maxlength: [100, 'Title cannot be more than 100 characters long'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required'], 
    // match: [/^(\/|\\)([^\/\\]+\/)*[^\/\\]+\.(jpg|jpeg|png|gif)$/i, 'Please provide a valid image path (jpg, jpeg, png, or gif)'], 
  },
}, {
  timestamps: true, 
});


const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
