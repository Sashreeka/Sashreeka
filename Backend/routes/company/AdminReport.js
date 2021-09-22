const express = require("express");
const router = express.Router();
const db = require("../../connection/database");

// router.get("/reports/getallproductSales", (req, res) => {
//   const sqlget =
//     "SELECT DISTINCT(fertilizer.fertilizerId), fertilizer.name as fertilizerName,(SELECT SUM(quantity) FROM `ordercontainsfertilizer` WHERE ordercontainsfertilizer.fertilizerId=fertilizer.fertilizerId GROUP BY fertilizerId) as sales ,fertilizer.unitPrice FROM fertilizer LEFT JOIN ordercontainsfertilizer ON fertilizer.fertilizerId=ordercontainsfertilizer.fertilizerId GROUP BY fertilizer.name ORDER by sales DESC";
//   db.query(sqlget, (err, result) => {
//     //  console.log(result);
//     res.send(result);
//   });
// });

module.exports = router;
