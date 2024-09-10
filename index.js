const express = require('express');
const { port } = require('./config/_config');
const { getLocalIP } = require('./config/local_ip');
const { connect } = require('./config/db_config');
const auth = require('./routes/auth_routes');

connect();

const app = express();

app.use(express.json());


app.get('', (req, res) => {
    return res.status(200).json({ message: 'Welcome to Expense Tracker!' });
});


app.use('/auth', auth);


app.listen(port, (req, res) => {
    const localIP = getLocalIP();
    console.log(`Server up and running at http://${localIP}:${port}`);
});