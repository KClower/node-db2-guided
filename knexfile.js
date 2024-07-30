// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  // configuration for a development database
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/veggies.db3' // change path to database from root
    },
    useNullAsDefault: true, // used for SQLite only
    migrations: {
      directory: './data/migrations'
    }
  },

  // example of adding a new configuration
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/testing.db3',
    },
    useNullAsDefault: true // used for SQLite only
  },

  // configuration for a staging database
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // configuration for a production database
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
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
