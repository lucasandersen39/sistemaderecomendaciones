// src/routes/recommendationRoutes.js
const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');
const userMiddleware = require('../middleware/userMiddleware');

// Obtener recomendaciones personalizadas
router.get('/', userMiddleware, recommendationController.getRecommendations);

module.exports = router;
