const express = require('express');

const fruitsRouter = require('./fruits/fruits-router.js');
const db = require('../data/db_config.js');

const server = express();

server.use(express.json());

server.use('/api/fruits', fruitsRouter);

server.get('/api/veggies', (req, res) => {
    db('veggies')
        .then(veggies => {
            return res.status(200).json({ data: veggies });
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json({ error: error.message });
        });
});

module.exports = server;
