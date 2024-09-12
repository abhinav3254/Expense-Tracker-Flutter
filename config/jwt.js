const jwt = require('jsonwebtoken');
const { jwt_secret } = require('./_config');


// This method will generate jwt token
function generateAccessToken(user) {
    const payload = {
        id: user._id,
        email: user.email
    };

    const options = { expiresIn: '999h' };

    return jwt.sign(payload, jwt_secret, options);
}


// This method will decode jwt and return decoded value
function verifyAccessToken(token) {
    try {
        const decode = jwt.verify(token, jwt_secret);
        return { status: true, data: decode };
    } catch (err) {
        return { status: false, error: err.message };
    }
}

module.exports = { generateAccessToken, verifyAccessToken };