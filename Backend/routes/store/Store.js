const express = require("express");
const router = express.Router();
const db = require("../../connection/database");

router.get("/getstore", (req, res) => {

    const sqlgetfer = "SELECT * FROM fertilizer";
    db.query(sqlgetfer, (err, result) => {
       // console.log(result);
       res.send(result);
    });
  });

  module.exports = router;