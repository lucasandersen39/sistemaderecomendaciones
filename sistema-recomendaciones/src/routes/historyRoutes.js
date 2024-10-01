// src/routes/historyRoutes.js
const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController');
const userMiddleware = require('../middleware/userMiddleware');

// Agregar una entrada al historial de visualización
router.post('/', historyController.addToHistory);

// Obtener el historial de visualización del usuario
router.get('/:id', historyController.getHistory);

// Limpiar el historial de visualización del usuario
router.delete('/', historyController.clearHistory);

module.exports = router;
