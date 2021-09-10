const express = require("express");
const router = express.Router();
const db = require("../connection/database");

router.get("/getorderhistory", (req, res) => {
  const sqlget =
    "select * from deliveries where famerPhoneNumber='0752016924' and confirmationFlag!=0 order by confirmationFlag ASC";
  // const sqlget = "select * from deliveries where famerPhoneNumber='0752016924' order by confirmationFlag ASC";
  db.query(sqlget, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

//upcoming deleveries display the dagent mobile app

router.get("/deliveryAgent/upcoming", (req, res) => {
  // console.log('hi anu');
  const sqlget =
    "select farmer.phoneNumber,farmer.firstName,farmer.lastName,farmer.city,farmer.address,deliveries.orderId,deliveries.dateTime  from farmer INNER JOIN deliveries on farmer.phoneNumber=deliveries.famerPhoneNumber WHERE 	deliveryAgentPhoneNumber='0712345678' AND NOW() < dateTime order by dateTime asc; ";
  db.query(sqlget, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

//today deleveries display the dagent mobile app

router.get("/deliveryAgent/today", (req, res) => {
  // console.log('hi anu');
  const sqlget =
    "select * from deliveries WHERE 	deliveryAgentPhoneNumber='0712345678' AND DATEDIFF(CURRENT_DATE,dateTime)>=0 AND DATEDIFF(CURRENT_DATE,dateTime)<1; ";
  db.query(sqlget, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

//history deleveries display the dagent mobile app

router.get("/deliveryAgent/history", (req, res) => {
  // console.log('hi anu');
  const sqlget =
  "select farmer.phoneNumber,farmer.firstName,farmer.lastName,farmer.city,deliveries.orderId,DAY(deliveries.dateTime)AS dateD, MONTHNAME(deliveries.dateTime) AS monthName,DATE_FORMAT(deliveries.dateTime,'%b') AS shortMonth,DATE_FORMAT(deliveries.datetime, '%Y-%m-%d') AS newdateTime,orders.amount  from ((deliveries INNER JOIN farmer on deliveries.famerPhoneNumber=farmer.phoneNumber)INNER JOIN orders on deliveries.orderId=orders.orderId) WHERE deliveryAgentPhoneNumber='0712345678' AND confirmationFlag=1 AND NOW() > dateTime order by dateTime asc;"
    // "select * from deliveries WHERE 	deliveryAgentPhoneNumber='0712345678' AND confirmationFlag=1 AND NOW() > dateTime order by dateTime asc; ";
  db.query(sqlget, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

module.exports = router;
