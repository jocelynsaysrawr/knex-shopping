exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user").insert([
        { user_id: 1, email: "hey.you.guy@gmail.com", password: "1234" },
        { user_id: 2, email: "rowValue2@aol.com", password: "baconbaconbacon" },
        { user_id: 3, email: "rowValue3@yahoo.com", password: "bobross" }
      ]);
    });
};
