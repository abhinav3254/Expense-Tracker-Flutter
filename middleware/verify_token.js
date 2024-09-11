const { verifyAccessToken } = require('../config/jwt');


// This middleware will check for token in the header
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }

    const result = verifyAccessToken(token);

    if (result.status === false) {
        return res.status(401).json({ message: result.error });
    }

    req.user = result.data;

    next();
}

module.exports = { authenticateToken };