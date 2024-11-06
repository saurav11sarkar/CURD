const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  fatherName: {
    type: String,
    required: true,
    trim: true
  },
  designation: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  mobile: {
    type: String,
    required: true,
    trim: true,
  }
});

const Teacher = mongoose.model('Teacher', personSchema);

module.exports = Teacher;
