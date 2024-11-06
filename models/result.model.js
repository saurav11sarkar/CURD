const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    title: { type: String, required: true },
    filePath: { type: String, required: [true, 'File not uploaded! Please upload a file.'] },
}, { timestamps: true });

const Result = mongoose.model('Result', resultSchema);
module.exports = Result;
