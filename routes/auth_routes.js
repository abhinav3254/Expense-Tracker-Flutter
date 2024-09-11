const express = require('express');
const router = express.Router();
const { User } = require('../model/user_model');
const { generateAccessToken } = require('../config/jwt');


router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    if (existingUser.password === password) {
        const token = generateAccessToken(existingUser);

        return res.status(200).json({ message: token, _id: existingUser._id });
    } else {
        return res.status(400).json({ message: 'Wrong Password' });
    }

});


// register route
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, gender } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and Password are required fields' });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use.' })
        }

        const newUser = new User({ name: name, email: email, password: password, gender: gender });

        await newUser.save();

        return res.json({ message: 'Registration done successfully' });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

module.exports = router;