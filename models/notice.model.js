const mongoose = require('mongoose');

const titleDescriptionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3, 
    maxlength: 150, 
    trim: true, 
  },
  description: {
    type: String,
    required: true,
    minlength: 10, 
    maxlength: 500, 
    trim: true, 
  }
}, {
  timestamps: true,
});


const NotiedBord = mongoose.model('NotiedBord', titleDescriptionSchema);

module.exports = NotiedBord;
