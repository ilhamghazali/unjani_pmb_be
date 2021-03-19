// Update with your config settings.
require('dotenv').config({path: __dirname + '/../../.env'})

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host    : process.env.PG_HOST,
      user    : process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
