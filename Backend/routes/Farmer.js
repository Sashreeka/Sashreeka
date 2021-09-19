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

//home page fertilizer categories
router.get("/farmer/getcategories", (req, res) => {
  console.log("farmer.js------->getcategories");
  const sqlget = "select * from fertilizercategory";
  db.query(sqlget, (err, result) => {
    res.send(result);
    console.log("/farmer/getcategories");
    console.log(result[0]);

    if (err) {
      console.log(err);
    }
  });
});

router.get("/farmer/getcategoriesNames", (req, res) => {
  console.log("farmer.js------->getcategoriesNames");
  const sqlget = "select description from fertilizercategory";
  db.query(sqlget, (err, result) => {
    res.send(result);
    console.log("/farmer/getcategoriesNames");
    console.log(result[0]);

    if (err) {
      console.log(err);
    }
  });
});

router.get("/farmer/getproducts", (req, res) => {
  console.log("farmer.js------->getproducts");
  const sqlget = "select * from fertilizer";
  db.query(sqlget, (err, result) => {
    res.send(result);
    console.log("/farmer/getproducts");
    console.log(result[0]);

    if (err) {
      console.log(err);
    }
  });
});

router.get("/farmer/getproductsall", (req, res) => {
  console.log("farmer.js------->getproductsall");
  const sqlget =
    "SELECT * FROM fertilizer INNER JOIN fertilizerferlilizercategory ON fertilizer.fertilizerId =fertilizerferlilizercategory.fertilizerId";
  db.query(sqlget, (err, result) => {
    res.send(result);
    console.log("/farmer/getproductsall");
    console.log(result[0]);

    if (err) {
      console.log(err);
    }
  });
});

router.get("/farmer/getCart", (req, res) => {
  console.log("farmer.js------->getCart");
  const sqlget = "select * from fertilizer LIMIT 3";
  db.query(sqlget, (err, result) => {
    res.send(result);
    console.log("/farmer/getCart");
    console.log(result[0]);

    if (err) {
      console.log(err);
    }
  });
});

module.exports = router;
