const express = require("express");
const router = express.Router();
const db = require("../connection/database");

//home page fertilizers
router.get("/farmer/getfertilizerall", (req, res) => {
  console.log("farmer.js------->getfertilizerall");
  const sqlget = "select * from fertilizer";
  db.query(sqlget, (err, result) => {
    res.send(result);
    console.log("/farmer/getfertilizerall");
    if (err) {
      console.log(err);
    }
  });
});

// get profile data from farmer table
router.get("/farmer/getProfileDataById", (req, res) => {
  console.log("farmer.js------->getProfileData");
  const sqlget = "select * from farmer WHERE userId = '1'";
  db.query(sqlget, (err, result) => {
    res.send(result);
    console.log("/farmer/getProfileDataById");
    if (err) {
      console.log(err);
    }
  });
});

router.get("/farmer/getorderhistory", (req, res) => {
  console.log("farmer.js------->getorderhistory");
  const sqlget = "select * from orders order by orderId ASC";
  db.query(sqlget, (err, result) => {
    res.send(result);
    console.log("/farmer/getorderhistory");
    if (err) {
      console.log(err);
    }
  });
});

module.exports = router;
