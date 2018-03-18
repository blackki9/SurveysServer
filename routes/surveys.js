const express = require('express');
const router = express.Router();
const SurveysController = require('../controllers/surveys');
const authController = require('../controllers/auth');

router.route('/')
.get(authController.isAuthenticated, SurveysController.getAllSurveys)
.post(authController.isAuthenticated, SurveysController.addNewSurvey);

router.route('/:id')
.get(authController.isAuthenticated, SurveysController.getSurveyById)
.put(authController.isAuthenticated, SurveysController.updateSurveyById)
.delete(authController.isAuthenticated, SurveysController.deleteSurveyById);

module.exports = router;