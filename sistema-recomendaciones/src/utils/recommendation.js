// src/utils/recommendation.js
const Content = require('../models/Content');

exports.getRecommendations = async (user) => {
    const preferences = user.preferences;

    if (!preferences || preferences.length === 0) {
        // Si no hay preferencias, devolver contenido aleatorio
        return await getRandomContents(10);
    }

    // Buscar contenidos que coincidan con los géneros preferidos
    const recommendations = await Content.find({ genre: { $in: preferences } }).limit(10);
    return recommendations;
};

const getRandomContents = async (limit) => {
    const count = await Content.countDocuments();
    const random = Math.floor(Math.random() * count);
    return await Content.find().skip(random).limit(limit);
};
