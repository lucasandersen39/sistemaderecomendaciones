// src/controllers/recommendationController.js
const Preference = require('../models/Preference');
const Content = require('../models/Content');
const Recommendation = require('../models/Recommendation');

// Obtener recomendaciones personalizadas
exports.getRecommendations = async (req, res) => {
    const user_id = req.user;

    try {
        // Obtener preferencias del usuario
        const preference = await Preference.findOne({ user_id });
        let genres = [];
        if (preference && preference.genres.length > 0) {
            genres = preference.genres;
        }

        // Obtener contenido recomendado basado en géneros
        let recommendations = [];
        if (genres.length > 0) {
            recommendations = await Content.find({ genre: { $in: genres } }).limit(10);
        } else {
            // Si no hay preferencias, devolver contenido aleatorio
            const count = await Content.countDocuments();
            const random = Math.floor(Math.random() * count);
            recommendations = await Content.find().skip(random).limit(10);
        }

        // Guardar recomendaciones en MongoDB (opcional)
        let recommendationDoc = await Recommendation.findOne({ user_id });
        if (!recommendationDoc) {
            recommendationDoc = new Recommendation({
                user_id,
                content_ids: recommendations.map(content => content._id),
            });
        } else {
            recommendationDoc.content_ids = recommendations.map(content => content._id);
        }
        await recommendationDoc.save();

        res.json(recommendations);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};
