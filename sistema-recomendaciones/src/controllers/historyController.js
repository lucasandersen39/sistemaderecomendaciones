// src/controllers/historyController.js
const History = require('../models/History');

// Agregar una entrada al historial de visualización
exports.addToHistory = async (req, res) => {
    const { content_id, user_id } = req.body;
    //const user_id = req.user;

    if (!content_id) {
        return res.status(400).json({ msg: 'ID de contenido es requerido' });
    }

    try {
        const newHistory = new History({
            user_id,
            content_id,
        });

        await newHistory.save();
        res.json({ msg: 'Historial actualizado' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
};

// Obtener el historial de visualización del usuario
exports.getHistory = async (req, res) => {
    const user_id = req.params.id;

    try {
        const history = await History.find({ user_id }).populate('content_id');
        res.json(history);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

// Limpiar el historial de visualización del usuario
exports.clearHistory = async (req, res) => {
    const user_id = req.user;

    try {
        await History.deleteMany({ user_id });
        res.json({ msg: 'Historial limpiado' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};
