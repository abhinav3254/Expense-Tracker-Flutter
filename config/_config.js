const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: process.env.PORT,
    db_url: process.env.MONGODB_URI,
    jwt_secret: process.env.SECRET
}