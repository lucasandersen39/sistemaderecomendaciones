// src/middleware/userMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config');

// Asumimos que el token contiene el ID del usuario en el campo 'user_id'
module.exports = function (req, res, next) {

    req.user = 1; // Asumimos que el ID del usuario está en 'user_id'
    next();
    // Obtener token del header
    /*  const authHeader = req.header('Authorization');
     if (!authHeader) {
         return res.status(401).json({ msg: 'No hay token, autorización denegada' });
     }
 
     const token = authHeader.split(' ')[1];
 
     if (!token) {
         return res.status(401).json({ msg: 'Token no válido, autorización denegada' });
     }
 
     try {
         const decoded = jwt.verify(token, config.jwtSecret);
         req.user = decoded.user_id; // Asumimos que el ID del usuario está en 'user_id'
         next();
     } catch (err) {
         res.status(401).json({ msg: 'Token inválido' });
     } */
};
