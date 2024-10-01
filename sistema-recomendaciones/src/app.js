// src/app.js
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const contentRoutes = require('./routes/contentRoutes');
const historyRoutes = require('./routes/historyRoutes');
const preferenceRoutes = require('./routes/preferenceRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api/contents', contentRoutes);
app.use('/api/history', historyRoutes);
app.use('/api/preferences', preferenceRoutes);
app.use('/api/recommendations', recommendationRoutes);

// Conexión a MongoDB
mongoose.connect(config.mongoURI)
    .then(() => {
        console.log('MongoDB conectado');
        // Iniciar el servidor
        app.listen(config.port, () => {
            console.log(`Servidor corriendo en puerto ${config.port}`);
        });
    })
    .catch(err => {
        console.error('Error al conectar a MongoDB', err);
    });
