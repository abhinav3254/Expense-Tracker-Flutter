const express = require('express');
const { verifyAccessToken } = require('../config/jwt');

// This middleware will check for token in the header
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    // we are splitting our 'Bearer Zn....' from space, and it will make it as in array like this [[Bearer ],[Zx..]] and we are accessing [1] index which will give us token. 
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

module.exports = authenticateToken;