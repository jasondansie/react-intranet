const express = require('express');
const app = express();
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'gctestman',
    password: 'C4rPnxT82r',
    database: 'gctest'
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
        return;
    }
    console.log('Connected to database');
});

// Define endpoint to get all users
app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', (error, results) => {
        if (error) {
            console.error('Error getting users: ', error);
            res.status(500).send('Error getting users');
            return;
        }
        res.json(results);
    });
});

// Start the server
app.listen(5000, () => {
    console.log('Server started on port 5000');
});