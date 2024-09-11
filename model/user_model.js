const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    gender: String
});

const User = new mongoose.model('users', UserModel);

module.exports = { User };