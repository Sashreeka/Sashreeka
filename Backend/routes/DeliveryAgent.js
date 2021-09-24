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
  const sqlget="SELECT * FROM deliveries INNER JOIN orders ON deliveries.orderId=orders.orderId WHERE status=2  AND deliveryAgentPhoneNumber=? AND NOW()<=deliveryassigneddate;";
  db.query(sqlget,deliveryAgentPhoneNumber,(err,result)=>{
   // console.log(err);
    res.send(result);
  })

})

//new orders
router.get("/deliveryAgent/newOrdersGroupBy/:deliveryAgentPhoneNumber",(req,res)=>{
  const deliveryAgentPhoneNumber=req.params.deliveryAgentPhoneNumber;
  const sqlget="SELECT SUM(deliveryAgentsPayment)AS deliveryFee,deliveryId,SUM(deliveryLoad) AS totalLoad,DATE_FORMAT(deliveries.deliveryassigneddate,'%b') AS shortMonth,DAY(deliveries.deliveryassigneddate)AS dateD FROM deliveries INNER JOIN orders ON deliveries.orderId=orders.orderId WHERE orders.status=2  AND NOW()<=deliveryassigneddate AND deliveryAgentPhoneNumber=?   GROUP BY deliveryId;";
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

router.get("/deliveryAgent/upcoming/:deliveryAgentPhoneNumber", (req, res) => {
  const deliveryAgentPhoneNumber=req.params.deliveryAgentPhoneNumber;
  // console.log('hi anu');
  const sqlget =
    "select *,DATE_FORMAT(deliveryassigneddate,'%b') AS shortMonth,DAY(deliveryassigneddate)AS dateD  from deliveries INNER JOIN orders ON deliveries.orderId=orders.orderId WHERE 	deliveryAgentPhoneNumber=?   AND  status=3 AND NOW() < deliveryassigneddate order by deliveryassigneddate asc;";
  db.query(sqlget,deliveryAgentPhoneNumber, (err, result) => {
  //  console.log(result);
    res.send(result);
  });
});

//today deleveries display the dagent mobile app

router.get("/deliveryAgent/today/:deliveryAgentPhoneNumber", (req, res) => {
  const deliveryAgentPhoneNumber=req.params.deliveryAgentPhoneNumber;
  // console.log('hi anu');
  const sqlget =
  "select orders.orderId,orders.district,orders.receiverName,orders.houseNumber,orders.streetName,orders.city,orders.latitude,orders.longitude,orders.amount,orders.deliveryCharge,orders.farmerPhoneNumber,DATE_FORMAT(deliveries.deliveryassigneddate,'%b') AS shortMonth,DAY(deliveries.deliveryassigneddate)AS dateD,orders.status from deliveries  INNER JOIN orders ON deliveries.orderId=orders.orderId WHERE deliveryAgentPhoneNumber=? AND status=3 AND DATEDIFF(CURRENT_DATE,deliveryassigneddate)>=0 AND DATEDIFF(CURRENT_DATE,deliveryassigneddate)<1;";
//  "select orders.orderId,orders.district,orders.receiverName,orders.houseNumber,orders.streetName,orders.city,orders.amount,ordercontainsfertilizer.fertilizerName,ordercontainsfertilizer.quantity from ((deliveries  INNER JOIN orders ON deliveries.orderId=orders.orderId)INNER JOIN ordercontainsfertilizer ON deliveries.orderId=ordercontainsfertilizer.orderId) WHERE 	deliveryAgentPhoneNumber='0712345678' AND DATEDIFF(CURRENT_DATE,dateTime)>=0 AND DATEDIFF(CURRENT_DATE,dateTime)<1;";

  //  "select * from deliveries WHERE 	deliveryAgentPhoneNumber='0712345678' AND DATEDIFF(CURRENT_DATE,dateTime)>=0 AND DATEDIFF(CURRENT_DATE,dateTime)<1; ";
  db.query(sqlget, deliveryAgentPhoneNumber,(err, result) => {
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

  const updateSql="UPDATE orders SET status=1 WHERE status=3 AND orderId=?";
  db.query(updateSql,orderId,(err,result)=>{
    res.send(result);
    // console.log(err);
    // console.log(result);
  })
})


///display today delivery location
router.get('/deliveryAgent/displayMapLocation/:deliveryAgentPhoneNumber',(req,res)=>{
  const deliveryAgentPhoneNumber=req.params.deliveryAgentPhoneNumber;
  const sqlget="SELECT orders.orderId,orders.receiverName,district,houseNumber,streetName,city,latitude,longitude FROM orders INNER JOIN deliveries ON orders.orderId=deliveries.orderId  WHERE deliveries.deliveryAgentPhoneNumber=? AND status=3  AND DATEDIFF(CURRENT_DATE,deliveryassigneddate)>=0 AND DATEDIFF(CURRENT_DATE,deliveryassigneddate)<1;";;
  db.query(sqlget,deliveryAgentPhoneNumber,(err,result)=>{
    res.send(result);
    console.log(err);
  })
})


//history deleveries display the dagent mobile app

router.get("/deliveryAgent/history/:deliveryAgentPhoneNumber", (req, res) => {
  const deliveryAgentPhoneNumber=req.params.deliveryAgentPhoneNumber;
  // console.log('hi anu');
  const sqlget =
  "select orders.farmerPhoneNumber,orders.receiverName,orders.city,deliveries.orderId,DAY(deliveries.deliveryassigneddate)AS dateD, MONTHNAME(deliveries.deliveryassigneddate) AS monthName,DATE_FORMAT(deliveries.deliveryassigneddate,'%b') AS shortMonth,DATE_FORMAT(deliveries.deliveryassigneddate, '%Y-%m-%d') AS newdateTime,orders.amount  from deliveries INNER JOIN orders on deliveries.orderId=orders.orderId WHERE deliveryAgentPhoneNumber=? AND orders.status=1 AND NOW() >= deliveryassigneddate ORDER BY deliveryassigneddate desc;"
    // "select * from deliveries WHERE 	deliveryAgentPhoneNumber='0712345678' AND confirmationFlag=1 AND NOW() > dateTime order by dateTime asc; ";
  db.query(sqlget,deliveryAgentPhoneNumber, (err, result) => {
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


//display profile details

router.get("/deliveryAgent/displayProfile/:phoneNumber",(req,res)=>{
  const  phoneNumber=req.params.phoneNumber;
  const sqlget="SELECT * FROM deliveryagent WHERE phoneNumber=?;";
 
  db.query(sqlget,phoneNumber,(err,result)=>{
    console.log(err);
    console.log(result);
    res.send(result);
  })
 
 })

module.exports = router;
