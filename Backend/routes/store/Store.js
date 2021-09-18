const express = require("express");
const router = express.Router();
const db = require("../../connection/database");

router.get("/getnewarrival", (req, res) => {

    const sqlgetfer = "SELECT fertilizerId AS id, name, description, offer, (unitPrice*(100-offer)/100) AS price, unitWeight AS weight, photo AS img, stock, reOrderLevel, measurementUnit, caption, arrivalTime FROM fertilizer ORDER BY arrivalTime DESC LIMIT 7";
    db.query(sqlgetfer, (err, result) => {
       // console.log(result);
       res.send(result);
    });
  });

  router.get("/getpopular", (req, res) => {

    const sqlgetfer = "SELECT a.fertilizerId AS id, a.name, a.description, a.offer, (a.unitPrice*(100-a.offer)/100) AS price, a.unitWeight AS weight, a.photo AS img, a.stock, a.reOrderLevel, a.measurementUnit, a.caption, a.arrivalTime FROM fertilizer a INNER JOIN (SELECT fertilizerId FROM ordercontainsfertilizer GROUP BY fertilizerId ORDER BY COUNT(fertilizerId) DESC LIMIT 10) b ON a.fertilizerId=b.fertilizerId";
    db.query(sqlgetfer, (err, result) => {
       // console.log(result);
       res.send(result);
    });
  });

  router.get("/getoffer", (req, res) => {

    const sqlgetfer = "SELECT fertilizerId AS id, name, description, offer, (unitPrice*(100-offer)/100) AS price, unitWeight AS weight, photo AS img, stock, reOrderLevel, measurementUnit, caption, arrivalTime FROM fertilizer WHERE offer>0";
    db.query(sqlgetfer, (err, result) => {
       // console.log(result);
       res.send(result);
    });
  });

  module.exports = router;