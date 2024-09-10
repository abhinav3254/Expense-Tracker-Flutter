const mongoose = require('mongoose');
const { db_url } = require('./_config');

async function connect() {
    const connection = await mongoose.connect(db_url);

    if (connection) {
        console.log('connected to ', connection.connection.host);
    } else {
        console.log('failed to connect to db');
    }
}

module.exports = { connect };