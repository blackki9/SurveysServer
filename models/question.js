const mongoose = require('mongoose');

const QuestionScheme = new mongoose.Schema({
    name: String,
    correctAnswerIndex: Int,
    answers: [ {text: String} ]
});

module.exports = mongoose.model('Question', QuestionScheme);