const express = require("express");
const router = express.Router();
const db = require("../../connection/database");

router.get("/getnewarrival", (req, res) => {

    const sqlgetfer = "SELECT * FROM fertilizer ORDER BY arrivalTime DESC LIMIT 7";
    db.query(sqlgetfer, (err, result) => {
       // console.log(result);
       res.send(result);
    });
  });

  router.get("/getpopular", (req, res) => {

    const sqlgetfer = "SELECT * FROM fertilizer a INNER JOIN (SELECT fertilizerId FROM ordercontainsfertilizer GROUP BY fertilizerId ORDER BY COUNT(fertilizerId) DESC LIMIT 10) b ON a.fertilizerId=b.fertilizerId";
    db.query(sqlgetfer, (err, result) => {
       // console.log(result);
       res.send(result);
    });
  });

  router.get("/getoffer", (req, res) => {

    const sqlgetfer = "SELECT * FROM fertilizer WHERE offer>0";
    db.query(sqlgetfer, (err, result) => {
       // console.log(result);
       res.send(result);
    });
  });

  module.exports = router;