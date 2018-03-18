const mongoose = require('mongoose');

const QuestionScheme = new mongoose.Schema({
    name: String,
    answerId: Int
});

module.exports = mongoose.model('Question', QuestionScheme);