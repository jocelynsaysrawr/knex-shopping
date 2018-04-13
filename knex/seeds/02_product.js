exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("product")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("product").insert([
        {
          product_id: 1,
          title: "noodles",
          description: "fancy noods",
          inventory: 10,
          price: 9.99
        },
        {
          product_id: 2,
          title: "wonton",
          description: "make soup with me",
          inventory: 100,
          price: 4.5
        },
        {
          product_id: 3,
          title: "mushroom",
          description: "not the magic kind",
          inventory: 25,
          price: 2.99
        }
      ]);
    });
};
