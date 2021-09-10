const express = require("express");
const router = express.Router();
const db = require("../connection/database");

//home page fertilizers
router.get("/farmer/getfertilizerall", (req, res) => {
  console.log("farmer.js------->getfertilizerall");
  const sqlget = "select * from fertilizer";
  db.query(sqlget, (err, result) => {
    // console.log(result);
    res.send(result);
  });
});

// get profile data from farmer table
router.get("/farmer/getProfileDataById", (req, res) => {
  console.log("farmer.js------->getProfileData");
  const sqlget = "select * from farmer WHERE userId = '1'";
  db.query(sqlget, (err, result) => {
    // console.log(result);
    res.send(result);
  });
});

router.get("/farmer/getorderhistory", (req, res) => {
  console.log("farmer.js------->getorderhistory");
  // const sqlget =
  //   "select * from deliveries where famerPhoneNumber='0752016924' and confirmationFlag!=0 order by confirmationFlag ASC";

  const sqlget = "select * from orders order by orderId ASC";

  // const sqlget = "select * from deliveries order by deliveryId ASC";
  db.query(sqlget, (err, result) => {
    // /console.log(result);
    res.send(result);
  });
});

module.exports = router;
