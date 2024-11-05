const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    class: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 10
    },
    fatherName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    motherName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    address: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
        match: [/^01[3-9]\d{8}$/, 'Please enter a valid Bangladeshi mobile number'],  // Validates for a 10-digit mobile number
        unique: true
    }
});
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
