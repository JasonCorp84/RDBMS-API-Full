const express = require('express');
const bodyParser = require('body-parser');

const knex = require('./database/db.js');
const server = express();
server.use(bodyParser.json());

server.post('/users', (req, res) => {
    const name = req.body;
    // console.log(name);
    knex
        .insert(name)
        .into('users')
        .then( function( tu ) {
            console.log(tu);
            res.status(201).json({ tu });
        })
        .catch((err) => {
            res.status(500).json({ error: `Could not insert into users ${ err.message }` });
        })
})

server.get('/users', (req, res) => {
    knex('users')
    .then( function (allUser) {
        res.status(200).json({ allUser })
    })
    .catch( function (err) {
        res.status(500).json({ err });
    })
})




const port = 3000;
server.listen(port, () => {
    console.log('Server listen at 3000');
});