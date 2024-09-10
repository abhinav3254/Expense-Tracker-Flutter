const express = require('express');
const router = express.Router();
const { User } = require('../model/user_model');


router.post('/login', (req, res) => {
    return res.json({ message: 'working' });
});

module.exports = router;