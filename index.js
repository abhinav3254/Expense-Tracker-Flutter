const express = require('express');
const cors = require('cors');
const { port } = require('./config/_config');
const { getLocalIP } = require('./config/local_ip');
const { connect } = require('./config/db_config');
const authRoute = require('./routes/auth_routes');
const expenseRoute = require('./routes/expense_management');

// importing middleware
const authenticateToken = require('./middleware/verify_token');

// connecting to db..
connect();

const app = express();
app.use(cors());

app.use(express.json());


app.get('', (req, res) => {
    return res.status(200).json({ message: 'Welcome to Expense Tracker!' });
});


app.use('/auth', authRoute);
app.use('/expense', authenticateToken, expenseRoute);


app.listen(port, (req, res) => {
    const localIP = getLocalIP();
    console.log(`Server up and running at http://${localIP}:${port}`);
});