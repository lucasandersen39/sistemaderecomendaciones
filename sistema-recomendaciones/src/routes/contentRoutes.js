// src/routes/contentRoutes.js
const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');
const userMiddleware = require('../middleware/userMiddleware');

// Crear nuevo contenido (solo accesible para administradores si es necesario)
router.post('/', contentController.createContent);

// Obtener detalles de un contenido específico
router.get('/:id', contentController.getContent);

// Listar contenidos con paginación y filtros
router.get('/', contentController.listContents);

module.exports = router;
