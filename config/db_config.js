const mongoose = require('mongoose');
const { db_url } = require('./_config');

async function connect() {
    console.log('attempting to connect to db...')
    try {
        const connection = await mongoose.connect(db_url);

        if (connection) {
            console.log('connected to ', connection.connection.host);
        } else {
            console.log('failed to connect to db');
        }
    } catch (err) {
        console.log('error in connecting to db...')
        console.log(err.message);
    }
}

module.exports = { connect };