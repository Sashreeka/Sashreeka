const express = require("express");
const router = express.Router();
const db = require("../../connection/database");

router.get("/getnewarrival", (req, res) => {

    const sqlgetfer = "SELECT fertilizerId AS id, name, description, offer, ROUND(unitPrice*(100-offer)/100) AS price, unitPrice, unitWeight AS weight, photo AS img, stock, reOrderLevel, measurementUnit, caption, arrivalTime FROM fertilizer ORDER BY arrivalTime DESC LIMIT 7";
    db.query(sqlgetfer, (err, result) => {
       // console.log(result);
       res.send(result);
    });
  });

  router.get("/getpopular", (req, res) => {

    const sqlgetfer = "SELECT a.fertilizerId AS id, a.name, a.description, a.offer, ROUND(a.unitPrice*(100-a.offer)/100) AS price, unitPrice, a.unitWeight AS weight, a.photo AS img, a.stock, a.reOrderLevel, a.measurementUnit, a.caption, a.arrivalTime FROM fertilizer a INNER JOIN (SELECT fertilizerId FROM ordercontainsfertilizer GROUP BY fertilizerId ORDER BY COUNT(fertilizerId) DESC LIMIT 10) b ON a.fertilizerId=b.fertilizerId";
    db.query(sqlgetfer, (err, result) => {
       // console.log(result);
       res.send(result);
    });
  });

  router.get("/getoffer", (req, res) => {

    const sqlgetfer = "SELECT fertilizerId AS id, name, description, offer, ROUND(unitPrice*(100-offer)/100) AS price, unitPrice, unitWeight AS weight, photo AS img, stock, reOrderLevel, measurementUnit, caption, arrivalTime FROM fertilizer WHERE offer>0 ORDER BY offer DESC";
    db.query(sqlgetfer, (err, result) => {
       // console.log(result);
       res.send(result);
    });
  });

  router.get("/getfercategory", (req, res) => {

   const sqlgetfer = "SELECT * FROM fertilizercategory";
   db.query(sqlgetfer, (err, result) => {
      // console.log(result);
      res.send(result);
   });
 });

 router.post("/placeOrder",(req,res) => {
   const amount =req.body.amount;
   const houseNumber = req.body.houseNumber;
   const streetName =req.body.streetName;
   const city =req.body.city;
   const district =req.body.district;
   const quickFlag =req.body.quickFlag;
   const receiverName =req.body.receiverName;
   const deliveryCharge =req.body.deliveryCharge;
   const farmerPhoneNumber=req.body.farmerPhoneNumber;
   const latitude=req.body.latitude;
   const longitude=req.body.longitude;
   const receiverNumber=req.body.receiverNumber;

   const orderCfertilizer=req.body.orderCfertilizer;
   
   const paymentType=req.body.paymentType;
   const transactionStatus=req.body.transactionStatus;

   const loyaltyPoints=req.body.loyaltyPoints;

   const sqlOrder = "INSERT INTO orders (amount, houseNumber, streetName, city, district, quickFlag, receiverName, deliveryCharge, status,farmerPhoneNumber,latitude,longitude,receiverNumber) VALUES ( ?,?,?,?,?,?,?,?,0,?,?,?,?)";
   db.query(sqlOrder,[amount,houseNumber,streetName,city,district,quickFlag,receiverName,deliveryCharge,farmerPhoneNumber,latitude,longitude,receiverNumber],(err,result)=>{
      if(err){
         console.log(err)
      }
      else{
         const sqlOrderid = "SELECT orderId FROM orders ORDER BY orderId DESC LIMIT 1";
         db.query(sqlOrderid,(err, result) => {
            if(err){
               console.log(err)
            }
            else{
               const orderId = result[0].orderId;
               const arr = orderCfertilizer.map((item) => [
                  orderId,
                  item['id'],
                  item['name'],
                  item['quantity'],
                  item['weight'],
               ]);

               const sqlOrderContain = "INSERT INTO ordercontainsfertilizer (orderId,fertilizerId,fertilizerName,quantity,weight) VALUES ?";
               db.query(sqlOrderContain,[arr],(err, result) => {
                  if(err){
                     console.log(err)
                  }
                  else{
                     const sqlFarmerl = "UPDATE farmer SET loyaltyPoints = ? WHERE phoneNumber = ?";
                     db.query(sqlFarmerl,[loyaltyPoints,farmerPhoneNumber],(err,result) => {
                        if(err){
                           console.log(err)
                        }
                        else{
                           const sqlPayment = "INSERT INTO payment (orderId, paymentType, transactionStatus) VALUES (?,?,?)";
                           db.query(sqlPayment,[orderId,paymentType,transactionStatus],(err,result) =>{
                              if(err){
                                 console.log(err)
                              }
                              else{
                                 res.sendStatus(orderId)
                              }
                           })
                        }
                     })
                  }
               });
            } 
         });
      }
   });
   

 });

  module.exports = router;