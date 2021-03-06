const express = require("express");
const router = express.Router();
const db = require("../../connection/database");

//upload image library
const multer = require("multer");
const path = require("path");
const { response } = require("express");

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
router.get("/admin/getAllassigedorders", (req, res) => {
  const sqlget =
    "SELECT orderId as id,farmerPhoneNumber,amount, CONCAT(houseNumber,', ',streetName,', ',city) as address, district, quickFlag, status,DATE_FORMAT(ordereddate, '%d %b %Y') as ordereddate,(SELECT SUM(quantity*weight) FROM ordercontainsfertilizer WHERE orderId=orders.orderId GROUP by orderId) as loads FROM orders ";
  // if you are changing the query, change below api as well(/admin/getAllunssigedordersDistrictList)
  db.query(sqlget, (err, result) => {
    console.log(result);
    res.send(result);
  });
});
router.get("/admin/getAllunssigedorders", (req, res) => {
  const sqlget =
    "SELECT orderId as id,farmerPhoneNumber,amount, city, district, quickFlag, status,DATE_FORMAT(graceenddate, '%d %b %Y') as graceenddate,(SELECT SUM(quantity*weight) FROM ordercontainsfertilizer WHERE orderId=orders.orderId GROUP by orderId) as loads FROM orders WHERE status=0 ";
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
    "SELECT DISTINCT(fertilizer.fertilizerId), fertilizer.name as fertilizerName,(SELECT SUM(quantity) FROM `ordercontainsfertilizer` WHERE ordercontainsfertilizer.fertilizerId=fertilizer.fertilizerId GROUP BY fertilizerId) as sales ,(fertilizer.unitPrice * (SELECT SUM(quantity) FROM `ordercontainsfertilizer` WHERE ordercontainsfertilizer.fertilizerId=fertilizer.fertilizerId GROUP BY fertilizerId) ) as income  , fertilizer.unitWeight as weight ,fertilizer.measurementUnit as mesure FROM fertilizer LEFT JOIN ordercontainsfertilizer ON fertilizer.fertilizerId=ordercontainsfertilizer.fertilizerId GROUP BY fertilizer.name ORDER BY `fertilizer`.`fertilizerId` ASC";
  db.query(sqlget, (err, result) => {
    //  console.log(result);
    res.send(result);
  });
});

router.get("/reports/janMonthlyproductSales", (req, res) => {
  const sqlget =
    "SELECT fertilizer.fertilizerId, fertilizer.name as fertilizerName,SUM(ordercontainsfertilizer.quantity) AS quantity ,(SUM(ordercontainsfertilizer.quantity)*fertilizer.unitPrice) as monthlyincome FROM fertilizer LEFT JOIN ordercontainsfertilizer ON fertilizer.fertilizerId=ordercontainsfertilizer.fertilizerId WHERE ordercontainsfertilizer.date<='2021-01-30' AND ordercontainsfertilizer.date>='2021-01-01' GROUP BY fertilizer.name";
  db.query(sqlget, (err, result) => {
    //  console.log(result);
    res.send(result);
  });
});

router.get("/reports/sepMonthlyproductSales", (req, res) => {
  const sqlget =
    "SELECT fertilizer.fertilizerId, fertilizer.name as fertilizerName ,SUM(ordercontainsfertilizer.quantity) AS quantity ,(SUM(ordercontainsfertilizer.quantity)*fertilizer.unitPrice) as monthlyincome FROM fertilizer LEFT JOIN ordercontainsfertilizer ON fertilizer.fertilizerId=ordercontainsfertilizer.fertilizerId WHERE ordercontainsfertilizer.date<='2021-09-30' AND ordercontainsfertilizer.date>='2021-09-01' GROUP BY fertilizer.name";
  db.query(sqlget, (err, result) => {
    //  console.log(result);
    res.send(result);
  });
});

router.get("/reports/EmptyMonthlyproductSales", (req, res) => {
  const sqlget =
    "SELECT fertilizer.fertilizerId, fertilizer.name as fertilizerName ,SUM(ordercontainsfertilizer.quantity) AS quantity ,(SUM(ordercontainsfertilizer.quantity)*fertilizer.unitPrice) as monthlyincome FROM fertilizer LEFT JOIN ordercontainsfertilizer ON fertilizer.fertilizerId=ordercontainsfertilizer.fertilizerId WHERE ordercontainsfertilizer.date<='2021-11-30' AND ordercontainsfertilizer.date>='2021-11-01' GROUP BY fertilizer.name";
  db.query(sqlget, (err, result) => {
    //  console.log(result);
    res.send(result);
  });
});

// report - district vise delivery chart
router.get("/reports/districtviseOrders", (req, res) => {
  const sqlget =
    "SELECT district,count(district) as orders FROM `orders` GROUP BY district ORDER BY district ASC";
  db.query(sqlget, (err, result) => {
    res.send(result);
  });
});

router.post("/dummy/deletableapi", (req, res) => {
  console.log("################################################");
  // console.log(req.body.selectedOrders);
  // console.log(req.body.dilOrders);
  // console.log(req.body.vehicle);
  // // console.log(req.body.vehicledetail);
  // console.log(req.body.deliveryDate);
  // console.log("delivery id:", req.body.deliveryidPre);

  const selectedOrders = req.body.selectedOrders;
  const dilOrders = req.body.dilOrders;
  // const vehicledetail = req.body.vehicledetail;
  const vehicledetail = req.body.vehicle;
  const deliveryDate = req.body.deliveryDate;
  const deliveryidPre = req.body.deliveryidPre;

  const arr = req.body.selectedOrders.map((item) => [
    deliveryidPre, // deliveryid
    item["id"], //orderid
    item["farmerPhoneNumber"], //farmerPhoneNumber
    vehicledetail.phoneNumber, // deliveryAgentPhoneNumber
    vehicledetail.maxLoad, // deliveryAgentPhoneNumber
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

router.put("/reports/updateorderstable", (req, res) => {
  const id = req.body.orderId;
  const sqlget = "UPDATE orders SET status=2 WHERE orderId=?";
  db.query(sqlget, [id], (err, result) => {
    res.send(result);
  });
});

router.get("/admin/newordersanuki", (req, res) => {
  const sqlget =
    "select COUNT(*) AS count  from orders  WHERE  status=0 AND DATEDIFF(CURRENT_DATE,ordereddate)>=0 AND DATEDIFF(CURRENT_DATE,ordereddate)<1";
  db.query(sqlget, (err, result) => {
    // console.log(result);
    res.send(result);
  });
});
router.get("/admin/deliveredordersanuki", (req, res) => {
  const sqlget =
    "select COUNT(*) AS count from deliveries  INNER JOIN orders ON deliveries.orderId=orders.orderId WHERE  status=1 AND DATEDIFF(CURRENT_DATE,deliveryassigneddate)>=0 AND DATEDIFF(CURRENT_DATE,deliveryassigneddate)<1";
  db.query(sqlget, (err, result) => {
    // console.log(result);
    res.send(result);
  });
});
router.get("/admin/unassigedordersanuki", (req, res) => {
  const sqlget = "SELECT COUNT(*)AS count  FROM orders WHERE status=0;";
  db.query(sqlget, (err, result) => {
    // console.log(result);
    res.send(result);
  });
});
router.get("/admin/assigeddeliveries", (req, res) => {
  const sqlget =
    "select COUNT(*) AS count from deliveries  INNER JOIN orders ON deliveries.orderId=orders.orderId WHERE  status=2 AND DATEDIFF(CURRENT_DATE,deliveryassigneddate)>=0 AND DATEDIFF(CURRENT_DATE,deliveryassigneddate)<1";
  db.query(sqlget, (err, result) => {
    // console.log(result);
    res.send(result);
  });
});

module.exports = router;
