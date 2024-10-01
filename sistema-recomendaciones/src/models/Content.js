const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    id_content: {
        type: String,
        required: true,
        unique: true,
    },
    titulo: {
        type: String,
        required: true,
        trim: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    categoria: {
        type: [String],
        required: true,
    },
    duracion: {
        type: Number,
        required: true,
    },
    etiquetas: {
        type: [String],
        default: [],
    },
}, {
    timestamps: true,
});


module.exports = mongoose.model('Content', ContentSchema);