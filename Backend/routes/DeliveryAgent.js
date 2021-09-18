const express = require("express");
const router = express.Router();
const db = require("../connection/database");

router.get("/getorderhistory", (req, res) => {
  const sqlget =
    "select * from deliveries where famerPhoneNumber='0752016924' and confirmationFlag!=0 order by confirmationFlag ASC";
  // const sqlget = "select * from deliveries where famerPhoneNumber='0752016924' order by confirmationFlag ASC";
  db.query(sqlget, (err, result) => {
   // console.log(result);
    res.send(result);
  });
});
// new orders
router.get("/deliveryAgent/newOrders/:deliveryAgentPhoneNumber",(req,res)=>{
  const deliveryAgentPhoneNumber=req.params.deliveryAgentPhoneNumber;
  const sqlget="SELECT * FROM deliveries INNER JOIN orders ON deliveries.orderId=orders.orderId WHERE orders.status=2 AND deliveryAgentPhoneNumber=?;";
  db.query(sqlget,deliveryAgentPhoneNumber,(err,result)=>{
   // console.log(err);
    res.send(result);
  })

})


//new orders
router.get("/deliveryAgent/newOrdersGroupBy/:deliveryAgentPhoneNumber",(req,res)=>{
  const deliveryAgentPhoneNumber=req.params.deliveryAgentPhoneNumber;
  const sqlget="SELECT SUM(deliveryAgentsPayment)AS deliveryFee,deliveryId,SUM(deliveryLoad) AS totalLoad,DATE_FORMAT(deliveries.dateTime,'%b') AS shortMonth,DAY(deliveries.dateTime)AS dateD FROM deliveries INNER JOIN orders ON deliveries.orderId=orders.orderId WHERE orders.status=2 AND deliveryAgentPhoneNumber=? GROUP BY deliveryId;";
  db.query(sqlget,deliveryAgentPhoneNumber,(err,result)=>{
   // console.log(err);
    res.send(result);
 //   console.log(result)
  })

})


//order confrim
router.put('/deliveryAgent/newOrderConfirm',(req,res)=>{
  const deliveryId=req.body.deliveryId;
  const deliveryAgentPhoneNumber=req.body.deliveryAgentPhoneNumber;
  const sqlUpdate="UPDATE deliveries INNER JOIN orders ON deliveries.orderId=orders.orderId SET orders.status=3 WHERE deliveries.deliveryId=? AND orders.status=2 AND deliveries.deliveryAgentPhoneNumber=?;";
  db.query(sqlUpdate,[deliveryId,deliveryAgentPhoneNumber],(err,result)=>{
    res.send(result);
    console.log(err);
  })
})

//newOrderCancel

//order cancel
router.put('/deliveryAgent/newOrderCancel',(req,res)=>{
  const deliveryId=req.body.deliveryId;
  const deliveryAgentPhoneNumber=req.body.deliveryAgentPhoneNumber;
  const sqlUpdate="UPDATE deliveries INNER JOIN orders ON deliveries.orderId=orders.orderId SET orders.status=0 WHERE deliveries.deliveryId=? AND orders.status=2 AND deliveries.deliveryAgentPhoneNumber=?;";
  db.query(sqlUpdate,[deliveryId,deliveryAgentPhoneNumber],(err,result)=>{
    res.send(result);
    console.log(err);
  })
})


//upcoming deleveries display the dagent mobile app

router.get("/deliveryAgent/upcoming", (req, res) => {
  // console.log('hi anu');
  const sqlget =
    "select farmer.phoneNumber,farmer.firstName,farmer.lastName,farmer.city,farmer.address,deliveries.orderId,deliveries.dateTime,DATE_FORMAT(deliveries.dateTime,'%b') AS shortMonth,DAY(deliveries.dateTime)AS dateD  from farmer INNER JOIN deliveries on farmer.phoneNumber=deliveries.famerPhoneNumber WHERE 	deliveryAgentPhoneNumber='0712345678' AND NOW() < dateTime order by dateTime asc; ";
  db.query(sqlget, (err, result) => {
  //  console.log(result);
    res.send(result);
  });
});

//today deleveries display the dagent mobile app

router.get("/deliveryAgent/today", (req, res) => {
  // console.log('hi anu');
  const sqlget =
  "select orders.orderId,orders.district,orders.receiverName,orders.houseNumber,orders.streetName,orders.city,orders.latitude,orders.longitude,orders.amount,orders.deliveryCharge,orders.farmerPhoneNumber,DATE_FORMAT(deliveries.dateTime,'%b') AS shortMonth,DAY(deliveries.dateTime)AS dateD from deliveries  INNER JOIN orders ON deliveries.orderId=orders.orderId WHERE 	deliveryAgentPhoneNumber='0712345678' AND orders.status=2 AND DATEDIFF(CURRENT_DATE,dateTime)>=0 AND DATEDIFF(CURRENT_DATE,dateTime)<1;";
//  "select orders.orderId,orders.district,orders.receiverName,orders.houseNumber,orders.streetName,orders.city,orders.amount,ordercontainsfertilizer.fertilizerName,ordercontainsfertilizer.quantity from ((deliveries  INNER JOIN orders ON deliveries.orderId=orders.orderId)INNER JOIN ordercontainsfertilizer ON deliveries.orderId=ordercontainsfertilizer.orderId) WHERE 	deliveryAgentPhoneNumber='0712345678' AND DATEDIFF(CURRENT_DATE,dateTime)>=0 AND DATEDIFF(CURRENT_DATE,dateTime)<1;";

  //  "select * from deliveries WHERE 	deliveryAgentPhoneNumber='0712345678' AND DATEDIFF(CURRENT_DATE,dateTime)>=0 AND DATEDIFF(CURRENT_DATE,dateTime)<1; ";
  db.query(sqlget, (err, result) => {
   // console.log("today"+result);
    res.send(result);
   // console.log("today error"+err);
  });
});

//today deliveries display order item
router.get("/deliveryAgent/todayItem", (req, res) => {
  // console.log('hi anu');
  const sqlget ="SELECT * FROM ordercontainsfertilizer;";


  
  db.query(sqlget, (err, result) => {
  //  console.log("today"+result);
    res.send(result);
    //console.log("today error"+err);
  });
});

//confirm deliveryAgent
router.put("/deliveryAgent/confirmDeliverByDAgent/:orderId",(req,res)=>{

  const orderId=req.params.orderId;

  const updateSql="UPDATE orders SET status=3 WHERE status=2 AND orderId=?";
  db.query(updateSql,orderId,(err,result)=>{
    res.send(result);
    // console.log(err);
    // console.log(result);
  })
})


///display today delivery location
router.get('/deliveryAgent/displayMapLocation',(req,res)=>{
  const sqlget="SELECT orderId,receiverName,district,houseNumber,streetName,city,latitude,longitude FROM orders;";
  db.query(sqlget,(err,result)=>{
    res.send(result);
    console.log(err);
  })
})


//history deleveries display the dagent mobile app

router.get("/deliveryAgent/history", (req, res) => {
  // console.log('hi anu');
  const sqlget =
  "select farmer.phoneNumber,farmer.firstName,farmer.lastName,farmer.city,deliveries.orderId,DAY(deliveries.dateTime)AS dateD, MONTHNAME(deliveries.dateTime) AS monthName,DATE_FORMAT(deliveries.dateTime,'%b') AS shortMonth,DATE_FORMAT(deliveries.datetime, '%Y-%m-%d') AS newdateTime,orders.amount  from ((deliveries INNER JOIN farmer on deliveries.famerPhoneNumber=farmer.phoneNumber)INNER JOIN orders on deliveries.orderId=orders.orderId) WHERE deliveryAgentPhoneNumber='0712345678' AND confirmationFlag=1 AND NOW() > dateTime ORDER BY dateTime desc;"
    // "select * from deliveries WHERE 	deliveryAgentPhoneNumber='0712345678' AND confirmationFlag=1 AND NOW() > dateTime order by dateTime asc; ";
  db.query(sqlget, (err, result) => {
  //  console.log(result);
    res.send(result);
  });
});

//delivery agent get availability
router.get("/getAvailabilityDAgent/:phoneNumber",(req,res)=>{
 const  phoneNumber=req.params.phoneNumber;
 const sqlget="SELECT availability FROM deliveryagent WHERE phoneNumber=?;";

 db.query(sqlget,phoneNumber,(err,result)=>{
   console.log(err);
   console.log(result);
   res.send(result);
 })

})

module.exports = router;
