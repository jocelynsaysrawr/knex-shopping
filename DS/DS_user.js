const knex = require("../knex/knex.js");

const getUserById = user_id => {
  return knex
    .select()
    .from("user")
    .where({
      user_id: user_id
    })
    .then(user => {
      return user[0];
    });
};

const getUserByEmail = email => {
  return knex
    .select()
    .from("user")
    .where({
      email: email
    })
    .then(user => {
      return user[0];
    });
};

const checkPassword = (email, password) => {
  return knex
    .select()
    .from("user")
    .where({
      email: email,
      password: password
    })
    .then(user => {
      return user[0];
    });
};

module.exports = {
  getUserById,
  getUserByEmail,
  checkPassword
};
