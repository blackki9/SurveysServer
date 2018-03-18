const mongoose = require('mongoose');

const SurveyScheme = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('Survey', SurveyScheme);