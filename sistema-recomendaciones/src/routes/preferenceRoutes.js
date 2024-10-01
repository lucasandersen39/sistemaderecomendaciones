// src/routes/preferenceRoutes.js
const express = require('express');
const router = express.Router();
const preferenceController = require('../controllers/preferencesController');
const userMiddleware = require('../middleware/userMiddleware');

// Obtener preferencias del usuario
router.get('/', userMiddleware, preferenceController.getPreferences);

// Actualizar preferencias del usuario
router.put('/', userMiddleware, preferenceController.updatePreferences);

module.exports = router;
