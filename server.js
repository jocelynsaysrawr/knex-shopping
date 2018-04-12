const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
