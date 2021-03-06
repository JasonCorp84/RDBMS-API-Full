// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/dev.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true
  },


  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'Csaba-full-RDBMS',
      user:     'Csaba',
      password: 'pass'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
  }
