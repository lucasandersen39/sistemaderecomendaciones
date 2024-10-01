// src/models/Preference.js
const mongoose = require('mongoose');

const PreferenceSchema = new mongoose.Schema({
    user_id: {
        type: String, // Asumimos que el ID de usuario viene como cadena desde el otro servicio
        required: true,
        index: true,
    },
    genres: {
        type: [String],
        default: [],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Preference', PreferenceSchema);
