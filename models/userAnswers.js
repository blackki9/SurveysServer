const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    answerIndex: Int
});

module.exports = mongoose.model('UserAnswer', AnswerSchema);