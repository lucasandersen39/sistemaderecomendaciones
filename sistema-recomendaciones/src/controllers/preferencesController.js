// src/controllers/preferencesController.js
const Preference = require('../models/Preference');

// Obtener preferencias del usuario
exports.getPreferences = async (req, res) => {
    const user_id = req.user;

    try {
        let preference = await Preference.findOne({ user_id });
        if (!preference) {
            // Si no existen preferencias, crear un documento vacío
            preference = new Preference({ user_id, genres: [] });
            await preference.save();
        }
        res.json(preference);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

// Actualizar preferencias del usuario
exports.updatePreferences = async (req, res) => {
    const user_id = req.user;
    const { genres } = req.body;

    if (!genres || !Array.isArray(genres)) {
        return res.status(400).json({ msg: 'Géneros son requeridos y deben ser un arreglo' });
    }

    try {
        let preference = await Preference.findOneAndUpdate(
            { user_id },
            { genres },
            { new: true, upsert: true } // Crear si no existe
        );
        res.json(preference);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};
