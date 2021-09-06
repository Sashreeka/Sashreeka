const express = require("express");
const router = express.Router();
const db = require("../connection/database");

// get profile data from farmer table

router.get("/farmer/getProfileDataById", (req, res) => {
  console.log("Farmer getProfileData");
  const sqlget = "select * from farmer WHERE userId = '1'";
  db.query(sqlget, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

module.exports = router;
