const express = require("express");
const router = express.Router();
const db = require("../../connection/database");

//upload image library
const multer = require("multer");
const path = require("path");

//  display the delivery agent+ vehicle details details..................
router.get("/admin/getdeliveyagentetails", (req, res) => {
  const sqlget =
    "SELECT userId,CONCAT(firstName,' ',lastName) AS Name ,availability,vehicle.vehicleId,vehicle.maxLoad,drivingLicence FROM `deliveryagent` LEFT JOIN vehicle ON vehicle.deliveryAgentPhoneNumber=deliveryagent.phoneNumber ORDER BY userId";
  db.query(sqlget, (err, result) => {
    // console.log(result);
    res.send(result);
  });
});

//  display a full details of delivery agent + vehicle details by id.................
router.get("/admin/getdeliveyagentetailsById/:userId", (req, res) => {
  const userId = req.params.userId;
  const sqlget =
    "SELECT userId,CONCAT(firstName,' ',lastName) AS name ,availability,nic,phoneNumber,address,drivingLicence ,vehicle.vehicleId,vehicle.maxLoad,vehicle.vehicleTypeId FROM `deliveryagent` LEFT JOIN vehicle ON vehicle.deliveryAgentPhoneNumber=deliveryagent.phoneNumber WHERE userId=?";
  db.query(sqlget, userId, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

//  display the Available delivery agent details..................
router.get("/admin/getavailbledeliveyagentetails", (req, res) => {
  const sqlget =
    "SELECT userId,CONCAT(firstName,' ',lastName) AS name ,availability,nic,phoneNumber,address,drivingLicence ,vehicle.vehicleId,vehicle.maxLoad,vehicle.vehicleTypeId FROM `deliveryagent` LEFT JOIN vehicle ON vehicle.deliveryAgentPhoneNumber=deliveryagent.phoneNumber WHERE `availability`=1";
  db.query(sqlget, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

//  display the Un Assigned Orders..................
router.get("/admin/getunassignedorders", (req, res) => {
  const sqlget =
    "SELECT `orderId`, `amount`, `houseNumber`, `streetName`, `City`, `district`, `quickFlag`, `receiverName`, `deliveryCharge`, `status`, `farmerPhoneNumber`, `staffPhoneNumber` FROM `orders` where status=0 order by City";
  db.query(sqlget, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

//  display the items of all Un Assigned Orders..................
router.get("/admin/getitemsofsunassignedordersall", (req, res) => {
  const sqlget =
    "SELECT * FROM `ordercontainsfertilizer` WHERE orderId IN(SELECT `orderId` FROM `orders` where status=0 order by City)";
  db.query(sqlget, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

module.exports = router;
