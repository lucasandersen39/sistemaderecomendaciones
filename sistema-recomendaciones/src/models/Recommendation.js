// src/models/Recommendation.js
const mongoose = require('mongoose');

const RecommendationSchema = new mongoose.Schema({
    user_id: {
        type: String, // Asumimos que el ID de usuario viene como cadena desde el otro servicio
        required: true,
        index: true,
    },
    content_ids: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Content',
        default: [],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Recommendation', RecommendationSchema);
