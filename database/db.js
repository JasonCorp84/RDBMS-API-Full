const config = require('../knexfile.js')
const knex = require('knex')(config.development); // it returns a function that we use later

module.exports = knex;

