const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    mongoURI: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1h',
    port: process.env.PORT || 3000,
};