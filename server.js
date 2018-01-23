const express = require('express');
const bodyParser = require('body-parser');

const knex = require('./database/db.js');
const server = express();
server.use(bodyParser.json());

server.post('/users', (req, res) => {
    const name = req.body;
    console.log(name);
    knex.insert(name)
        .into('users')
        .then( (ids) => {
            console.log(ids)
            res.status(201).json({ ids })
        })
        .catch( () => {
            res.status(500).json({ error: 'Could not insert into users' });
        })
})


const port = 3000;
server.listen(port, () => {
    console.log('Server listen at 3000');
});