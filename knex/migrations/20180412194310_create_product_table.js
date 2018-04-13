exports.up = function(knex, Promise) {
  return knex.schema.createTable("product", table => {
    table.increments("product_id");
    table.string("title").notNullable();
    table.text("description").notNullable();
    table
      .integer("inventory")
      .defaultTo(0)
      .notNullable();
    table.decimal("price", 8, 2).notNullable();
    table
      .timestamp("created_at")
      .defaultTo(knex.fn.now())
      .notNullable();
    table.timestamp("updated_at").defaultTo(null);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("product");
};
