const express = require('express');
const { port } = require('./config/_config');
const os = require('os');

const app = express();

app.use(express.json());


app.get('', (req, res) => {
    return res.status(200).json({ message: 'Welcome to Expense Tracker!' });
});


function getLocalIP() {
    const networkInterfaces = os.networkInterfaces();
    for (const interfaceName in networkInterfaces) {
        for (const iface of networkInterfaces[interfaceName]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return 'localhost';
}

app.listen(port, (req, res) => {
    const localIP = getLocalIP();
    console.log(`Server up and running at http://${localIP}:${port}`);
});