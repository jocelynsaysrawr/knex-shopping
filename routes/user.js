const express = require("express");
const router = express.Router();
const { getUserById, getUserByEmail, checkPassword } = require("../DS/DS_user");
module.exports = router;

router.get("/users/:user_id", (req, res) => {
  getUserById(req.params.user_id)
    .then(user => {
      if (user) {
        return res.json(user);
      } else {
        return res.json({ message: "User not found" });
      }
    })
    .catch(err => {
      console.log("Error");
    });
});

router.post("/users/login", (req, res) => {
  const { email, password } = req.body;
  getUserByEmail(email).then(user => {
    if (!user) {
      return res.json({ message: "User not found" });
    } else {
      checkPassword(email, password).then(user => {
        if (!user) {
          return res.json({ message: "Incorrect password" });
        } else {
          return res.json(user);
        }
      });
    }
  });
});
