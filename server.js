const express = require("express");
const app = express();
const knex = require("./knex/knex.js");
const bodyParser = require("body-parser");
const user = require("./routes/user");
const product = require("./routes/product");
const cart = require("./routes/cart");
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(user);
app.use(product);
app.use(cart);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
