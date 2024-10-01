// src/controllers/contentController.js
const Content = require('../models/Content');

// Crear nuevo contenido
exports.createContent = async (req, res) => {
    const { id_content, titulo, tipo, categoria, duracion, etiquetas } = req.body;

    try {
        const newContent = new Content({
            id_content,
            titulo,
            tipo,
            categoria,
            duracion,
            etiquetas,
        });

        const content = await newContent.save();
        res.json(content);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
};

// Obtener detalles de un contenido específico
exports.getContent = async (req, res) => {
    try {
        const content = await Content.findById(req.params.id);
        if (!content) {
            return res.status(404).json({ msg: 'Contenido no encontrado' });
        }
        res.json(content);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Contenido no encontrado' });
        }
        res.status(500).send('Error del servidor');
    }
};

// Listar contenidos con paginación y filtros
exports.listContents = async (req, res) => {
    const { skip = 0, limit = 100, tipo, titulo } = req.query;

    // Construir filtros
    let filters = {};
    if (tipo) {
        filters.tipo = tipo;
    }
    if (titulo) {
        filters.titulo = { $regex: titulo, $options: 'i' }; // Búsqueda insensible a mayúsculas
    }

    try {
        const contents = await Content.find(filters)
            .skip(parseInt(skip))
            .limit(parseInt(limit));
        res.json(contents);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};
