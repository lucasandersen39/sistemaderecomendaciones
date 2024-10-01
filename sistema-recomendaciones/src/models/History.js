// src/models/History.js
const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
    user_id: {
        type: String, // Asumimos que el ID de usuario viene como cadena desde el otro servicio
        required: true,
        index: true,
    },
    content_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content',
        required: true,
    },
    watched_at: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('History', HistorySchema);
