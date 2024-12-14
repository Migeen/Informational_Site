const express = require('express');
const path = require('path');

const app = express();

// Serve the appropriate HTML file based on the route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'));
});

// Handle 404 for other routes
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`My first express app - listening on port ${PORT}`);
});
