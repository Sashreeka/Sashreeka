const express = require("express");
const router = express.Router();
const db = require("../connection/database");

//home page fertilizers
router.get("/farmer/getfertilizerall", (req, res) => {
  console.log("hi anu getfertilizerall");
  const sqlget = "select * from fertilizer";
  db.query(sqlget, (err, result) => {
    //  console.log(result);
    res.send(result);
  });
});

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
