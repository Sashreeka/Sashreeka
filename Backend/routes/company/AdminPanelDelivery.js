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

// insert staff member....................
router.post("/admin/insertstaffmember", (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const address = req.body.address;
  const appointedDate = req.body.appointedDate;
  const nic = req.body.nic;
  const roleId = req.body.roleId;

  console.log(
    phoneNumber,
    email,
    firstName,
    lastName,
    address,
    nic,
    roleId,
    appointedDate
  );
  const sqlInsert =
    "INSERT INTO companystaff(phoneNumber, email,firstName, lastName, address, nic,roleId,appointedDate) VALUES (?,?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [
      phoneNumber,
      email,
      firstName,
      lastName,
      address,
      nic,
      roleId,
      appointedDate,
    ],
    (err, result) => {
      console.log("console :", result);
      res.send(result);
    }
  );
});

//  display all unassigned orders.................. need to district='gampaha' AND part + date sorting + less than selected
router.get("/admin/getAllunssigedorders", (req, res) => {
  const sqlget =
    "SELECT orderId as id,farmerPhoneNumber,amount, CONCAT(houseNumber,', ',streetName,', ',City) as address, district, quickFlag, status,DATE_FORMAT(graceenddate, '%d %b %Y') as graceenddate,(SELECT SUM(quantity*weight) FROM ordercontainsfertilizer WHERE orderId=orders.orderId GROUP by orderId) as loads FROM orders WHERE status=0";
  // if you are changing the query, change below api as well(/admin/getAllunssigedordersDistrictList)
  db.query(sqlget, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

//  display all unassigned order's  district List.................. need to district='gampaha'
router.get("/admin/getAllunssigedordersDistrictList", (req, res) => {
  const sqlget = "SELECT DISTINCT(district) FROM orders WHERE status=0";
  db.query(sqlget, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

// dummy insert -multiple rows
router.post("/dummy/deletableapi", (req, res) => {
  console.log(req.body.selectedOrders);
  console.log(req.body.dilOrders);
  console.log(req.body.vehicledetail);
  console.log(req.body.deliveryDate);
  console.log("delivery id:", req.body.deliveryidPre.deliveryId);

  const selectedOrders = req.body.selectedOrders;
  const dilOrders = req.body.dilOrders;
  const vehicledetail = req.body.vehicledetail;
  const deliveryDate = req.body.deliveryDate;
  const deliveryidPre = req.body.deliveryidPre;

  const arr = req.body.selectedOrders.map((item) => [
    deliveryidPre.deliveryId, // deliveryid
    item["id"], //orderid
    item["farmerPhoneNumber"], //farmerPhoneNumber
    vehicledetail.phoneNumber, // deliveryAgentPhoneNumber
    vehicledetail.maxLoad * 1000, // deliveryAgentPhoneNumber
    200, // distance
    1000, // deliveryAgentsPayment
    deliveryDate, //  deliveryassigneddate
  ]);

  console.log("array our:", arr);
  sqlInsert =
    "INSERT INTO deliveries(deliveryId, orderId, famerPhoneNumber, deliveryAgentPhoneNumber, deliveryLoad,distance, deliveryAgentsPayment, deliveryassigneddate) VALUES ?";
  db.query(sqlInsert, [arr], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    }
    console.log("", result);
    res.send(result);
  });
});

router.get("/assign/getpreviousdeliveryId", (req, res) => {
  sqlget =
    "SELECT `deliveryId` FROM `deliveries` ORDER by deliveryId DESC LIMIT 1";
  db.query(sqlget, (err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      console.log("", result);
      res.send(result);
    }
  });
});

// router.post("/assign/insertmultipledeliveries", (req, res) => {
//   const arr = req.body.map((item) => [item["id"], item["name"], item["age"]]);
//   sqlget =
//     "INSERT INTO deliveries(deliveryId, orderId, famerPhoneNumber, deliveryAgentPhoneNumber, deliveryLoad,distance, deliveryAgentsPayment, deliveryassigneddate) VALUES ?";
//   db.query(sqlget,[arr], (err, result) => {
//     if (err) {
//       res.send(err);
//       console.log(err);
//     } else {
//       console.log("", result);
//       res.send(result);
//     }
//   });
// });

router.get("/reports/getallproductSales", (req, res) => {
  const sqlget =
    "SELECT DISTINCT(fertilizer.fertilizerId), fertilizer.name as fertilizerName,(SELECT SUM(quantity) FROM `ordercontainsfertilizer` WHERE ordercontainsfertilizer.fertilizerId=fertilizer.fertilizerId GROUP BY fertilizerId) as sales ,(fertilizer.unitPrice * (SELECT SUM(quantity) FROM `ordercontainsfertilizer` WHERE ordercontainsfertilizer.fertilizerId=fertilizer.fertilizerId GROUP BY fertilizerId) ) as income FROM fertilizer LEFT JOIN ordercontainsfertilizer ON fertilizer.fertilizerId=ordercontainsfertilizer.fertilizerId GROUP BY fertilizer.name ORDER BY `fertilizer`.`fertilizerId` ASC";
  db.query(sqlget, (err, result) => {
    //  console.log(result);
    res.send(result);
  });
});

module.exports = router;
