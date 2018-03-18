const mongoose = require('mongoose');

const SurveyScheme = new mongoose.Schema({
    name: String,
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Question'}]
});

module.exports = mongoose.model('Survey', SurveyScheme);