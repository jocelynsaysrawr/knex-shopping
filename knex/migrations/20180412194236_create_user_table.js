exports.up = function(knex, Promise) {
  return knex.schema.createTable("user", table => {
    table.increments("user_id");
    table.string("email").notNullable();
    table.string("password").notNullable();
    table
      .timestamp("created_at")
      .defaultTo(knex.fn.now())
      .notNullable();
    table.timestamp("updated_at").defaultTo(null);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("user");
};
