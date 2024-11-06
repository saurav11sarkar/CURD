const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
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
    unique: true,
    // match: /^[0-9]{10}$/
  }
});

const Committee = mongoose.model('Committee', userSchema);
module.exports = Committee;
