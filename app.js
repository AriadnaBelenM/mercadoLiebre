const express = require('express');
const path = require('path');

const app = express();


let port = process.env.PORT || 3000;

app.use(express.static('public'));


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));})

app.get('/register', (req, res) => {
        res.sendFile(path.join(__dirname, '/views/register.html'));})

app.get('/login', (req, res) => {
            res.sendFile(path.join(__dirname, '/views/login.html'));})