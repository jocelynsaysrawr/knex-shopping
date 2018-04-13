// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "knex_shopping_user",
      password: "password",
      database: "knex_shopping_db",
      charset: "utf8"
    },
    migrations: {
      directory: __dirname + "/knex/migrations"
    },
    seeds: {
      directory: __dirname + "/knex/seeds"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      user: "knex_shopping_user",
      password: "password",
      database: "knex_shopping_db"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      user: "knex_shopping_user",
      password: "password",
      database: "knex_shopping_db"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
