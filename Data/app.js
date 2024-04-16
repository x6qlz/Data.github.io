// app.js
const express = require('express');
const bodyParser = require('body-parser');
const opn = require('opn');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve login.html for root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html')); // Serve login.html for root URL
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { password } = req.body;
    if (password === 'x6qlzishot') {
        res.redirect('/dashboard'); // Redirect to dashboard upon successful authentication
    } else {
        res.status(401).send('Unauthorized');
    }
});

// Serve dashboard.html for the dashboard route
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    opn(`http://localhost:${PORT}`);
});
