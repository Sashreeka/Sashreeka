const express = require("express");
const router = express.Router();
const db = require("../connection/database");

//get the profile data of farmer

router.get("/farmer/profile", (req, res) => {
  // console.log('hi anu');
  const sqlget = "SELECT * FROM farmer WHERE userId='1' ";
  db.query(sqlget, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

module.exports = router;
