const express = require("express");
const router = express.Router();
const db = require("../../connection/database");

//upload image library
const multer = require("multer");
const path = require("path");

//display fertilizer
router.get("/getfertilizer", (req, res) => {
  // console.log('hi anu');
  //  const sqlget = "select * from fertilizer";
  const sqlget =
    'SELECT CONCAT(unitWeight," ",measurementUnit) AS unit,fertilizerId,name,CONCAT(offer,"%")AS offer,unitPrice,photo,stock,reOrderLevel FROM fertilizer';
  db.query(sqlget, (err, result) => {
    //  console.log(result);
    res.send(result);
  });
});

//get a specific fertilizer id
////////
router.get("/getImage", (req, res) => {
  const sql = "select * from photo";
  db.query(sql, (err, result) => {
    res.send(result);
  });
});

///upload images
const storage = multer.diskStorage({
  destination: "./public/image/",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

///////////////sample
router.post("/addFertilizer", (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const description = req.body.description;
  const offer = req.body.offer;
  const unitPrice = req.body.unitPrice;
  const unitWeight = req.body.unitWeight;
  const stock = req.body.stock;
  const reOrderLevel = req.body.reOrderLevel;
  const measurementUnit = req.body.measurementUnit;
  const caption = req.body.caption;

  //const sqlInsert="INSERT INTO photo(name,image) VALUE(?,?)";
  const sqlInsert =
    "INSERT INTO fertilizer(name,description,offer,unitPrice,unitWeight,photo,stock,reOrderLevel,measurementUnit,caption) VALUE(?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [
      name,
      description,
      offer,
      unitPrice,
      unitWeight,
      image,
      stock,
      reOrderLevel,
      measurementUnit,
      caption,
    ],
    (err, result) => {
      // const sqlInsert = "INSERT INTO photo(name,image) VALUE(?,?)";
      // db.query(sqlInsert, [name, image], (err, result) => {
      console.log(err);
      console.log(result);
      res.send(result);
    }
  );
});

//update fertilizer item
router.put("/updateFertilizerItem/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const image = req.body.image;
  const description = req.body.description;
  const offer = req.body.offer;
  const unitPrice = req.body.unitPrice;
  const unitWeight = req.body.unitWeight;
  const stock = req.body.stock;
  const reOrderLevel = req.body.reOrderLevel;
  const measurementUnit = req.body.measurementUnit;
  const caption = req.body.caption;
  // name,
  //   description,
  //   offer,
  //   unitPrice,
  //   unitWeight,
  //   photo,
  //   stock,
  //   reOrderLevel,
  //   measurementUnit,
  //   caption;

  const sqlUpdate =
    "UPDATE fertilizer SET name=?,description=?,offer=?,unitPrice=?,unitWeight=?,photo=?,stock=?,reOrderLevel=?,measurementUnit=?,caption=? WHERE fertilizerId=?";

  db.query(
    sqlUpdate,
    [
      name,
      description,
      offer,
      unitPrice,
      unitWeight,
      image,
      stock,
      reOrderLevel,
      measurementUnit,
      caption,
      id,
    ],
    (err, result) => {
      console.log(err);
       console.log(result);
       res.send(result);
    }
  );
});

//display fertilizer
router.get("/getfertilizer", (req, res) => {
  // console.log('hi anu');
  //  const sqlget = "select * from fertilizer";
  const sqlget =
    'SELECT CONCAT(unitWeight," ",measurementUnit) AS unit,fertilizerId,name,CONCAT(offer,"%")AS offer,unitPrice,photo,stock,reOrderLevel FROM fertilizer';
  db.query(sqlget, (err, result) => {
    //  console.log(result);
    res.send(result);
  });
});

//get a specific fertilizer id

router.get("/getfertilizeritem/:fertilizerId", (req, res) => {
  const fertilizerId = req.params.fertilizerId;
  const sqlgetItem = "SELECT * FROM fertilizer WHERE fertilizerId=?";
  db.query(sqlgetItem, fertilizerId, (err, result) => {
    // console.log(result);
    res.send(result);
  });
});

//  display the delivery agent details..................
router.get("/admin/viewDAgentDetails", (req, res) => {
  const sqlget =
    "SELECT userId ,phoneNumber,email,CONCAT(firstName,' ',lastName) AS name,address,active,nic FROM deliveryagent;";
  db.query(sqlget, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

//  display the delivery agent+ vehicle details details..................
router.get("/admin/getdeliveyagentetails", (req, res) => {
  const sqlget =
    "SELECT userId,CONCAT(firstName,' ',lastName) AS Name ,availability,vehicle.vehicleId,vehicle.maxLoad,drivingLicence FROM `deliveryagent` LEFT JOIN vehicle ON vehicle.deliveryAgentPhoneNumber=deliveryagent.phoneNumber ORDER BY userId";
  db.query(sqlget, (err, result) => {
    // console.log(result);
    res.send(result);
  });
});

router.get("/admin/getdeliveyagentetailsvehicalsorted", (req, res) => {
  const sqlget =
    "SELECT userId,phoneNumber,CONCAT(firstName,' ',lastName) AS Name ,availability,vehicle.vehicleId,vehicle.maxLoad,drivingLicence FROM `deliveryagent` LEFT JOIN vehicle ON vehicle.deliveryAgentPhoneNumber=deliveryagent.phoneNumber ORDER BY maxLoad";
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

//display farmer details.....................
router.get("/getFarmerDetails", (req, res) => {
  const sqlGet =
    "SELECT userId ,phoneNumber,email,CONCAT(firstName,' ',lastName) AS name,address,active,loyaltyPoints FROM farmer;";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

//display the company staff details..................
router.get("/admin/viewCStaffDetails", (req, res) => {
  // const sqlget = "select * from companystaff";
  const sqlget =
    "select userId,profileimage,concat(firstName,' ',lastName) as name,phoneNumber,email,nic,address,role.roleName as role,DATE_FORMAT(appointedDate, '%b-%Y')as appointedDate FROM companystaff INNER JOIN role ON companystaff.roleId=role.roleId ORDER BY staffId ASC";

  db.query(sqlget, (err, result) => {
    //    console.log(result);
    res.send(result);
  });
});

//display the company staff details sort By roles..................
router.post("/admin/viewCStaffDetailsSortByRole", (req, res) => {
  const roleId = req.body.roleId;
  console.log("this is roleid:", roleId);
  if (roleId > 0 && roleId < 1000) {
    const sqlget =
      "select userId,phoneNumber,concat(firstName,' ',lastName) as name,email,address,appointedDate,nic,profileimage,companystaff.roleId,role.roleName FROM companystaff INNER JOIN role ON companystaff.roleId=role.roleId WHERE companystaff.roleId=?";
    db.query(sqlget, roleId, (err, result) => {
      if (err) {
        res.send({ "err ": err });
      }
      console.log("backend id=", roleId, "====>");
      res.send(result);
    });
  } else {
    const sqlget =
      "select userId,phoneNumber,concat(firstName,' ',lastName) as name,email,address,appointedDate,nic,profileimage,companystaff.roleId,role.roleName FROM companystaff INNER JOIN role ON companystaff.roleId=role.roleId ORDER BY staffId ASC";
    db.query(sqlget, (err, result) => {
      console.log("backend id=non");
      res.send(result);
    });
  }
});

// display delivery details........................
router.get("/admin/viewDeliveryDetails", (req, res) => {
  const sqlget = "select * from deliveries";
  db.query(sqlget, (err, result) => {
    //  console.log(result);
    res.send(result);
  });
});

//view  the company staff  details..................
router.get("/admin/viewStafffDetails/:userId", (req, res) => {
  let userId = req.params.userId;

  const sqlget = "select * from companystaff where userId=?";
  db.query(sqlget, userId, (err, result) => {
    //   console.log(result);
    res.send(result);
  });
});

// display delivery details of orders........................
router.get("/admin/viewDeliveryDetailsOfOrders", (req, res) => {
  const sqlget =
    "SELECT deliveryAgentPhoneNumber,DATE_FORMAT(deliveryassigneddate, '%Y-%m-%d') as deliveryassigneddate ,DATE_FORMAT(SYSDATE(), '%Y-%m-%d'),deliveryId,orderId, confirmationFlag FROM deliveries WHERE DATE_FORMAT(deliveryassigneddate, '%Y-%m-%d')>=DATE_FORMAT(SYSDATE(), '%Y-%m-%d')";
  db.query(sqlget, (err, result) => {
    //  console.log(result);
    res.send(result);
  });
});

// delete a product item...........................
router.delete("/deleteProductItems/:fertilizerId", (req, res) => {
  let fertilizerId = req.params.fertilizerId;

  const sqlDelete = "delete from fertilizer where fertilizerId=?";
  db.query(sqlDelete, fertilizerId, (err, result) => {
    //  console.log(result);
    res.send(result);
    //console.log(err);
  });
});

// get all privilages & roles ..................
router.get("/admin/getAll_privilages_and_roles", (req, res) => {
  const sqlget = "SELECT * FROM `role`";
  db.query(sqlget, (err, result) => {
    // console.log(err);
    // console.log(result);
    res.send(result);
  });
});

// get all privilages & roles ..................
router.get("/admin/getRoleNames", (req, res) => {
  const sqlget =
    "SELECT `COLUMN_NAME` FROM `INFORMATION_SCHEMA`.`COLUMNS` WHERE `TABLE_SCHEMA`='sashreeka_db' AND `TABLE_NAME`='role'";
  db.query(sqlget, (err, result) => {
    if (err) {
      console.log("backend err :", err);
    } else {
      console.log("backend ress :", result);
      res.send(result);
    }
  });
});

///sample
router.post("/save", (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const sql = "INSERT INTO image(name,image) VALUES(?,?);";
  db.query(sql, [name, image], (err, result) => {
    res.send(err);
    // console.log(err);
  });
});

// SELECT deliveryAgentPhoneNumber,DATE_FORMAT(deliveryassigneddate, "%Y-%m-%d"),DATE_FORMAT(SYSDATE(), "%Y-%m-%d"),deliveryId,orderId, confirmationFlag FROM deliveries WHERE DATE_FORMAT(deliveryassigneddate, "%Y-%m-%d")>=DATE_FORMAT(SYSDATE(), "%Y-%m-%d")

//Delivery agent Update
// router.post("/updatedeliveryagent/:userId", upload.single("image"), (req, res) => {
//   const name=req.body.name,
//   const NIC=req.body.NIC,
//   const phoneNumber=req.body.phoneNumber,
//   const address=req.body.address,
//   const drivingLicence=req.body.drivingLicence,
//   const profileImage=req.file.profileImage,
//   const vehicalNumber=req.body.vehicalNumber,
//   const maxLoad=req.body.maxLoad,

//   const sqlUpdate =
//   "UPDATE fertilizer SET name=?,description=?,offer=?,unitPrice=?,unitWeight=?,photo=?,stock=?,reOrderLevel=?,measurementUnit=?,caption=? WHERE fertilizerId=?";

//   db.query(
//     sqlUpdate,
//     [
//       name,
// NIC,
// phoneNumber,
// address,
// drivingLicence,
// profileImage,
// vehicalNumber,
// maxLoad,
//     ],
//     (err, result) => {
//       console.log(err);
//       console.log(result);
//       res.send(result);
//     }
//   );
// });

////SELECT DATE_FORMAT(date,'%Y-%m') AS date FROM ordercontainsfertilizer;

//home page sales analytics

router.get('/adminHome/getSalesAnalytics',(req,res)=>{
  const sqlget='SELECT DATE_FORMAT(ordereddate, "%b") AS name,COUNT(*) AS count,DATE_FORMAT(ordereddate, "%m-%Y") AS mName FROM orders WHERE ordereddate <= NOW() and ordereddate >= Date_add(Now(),interval - 12 month) GROUP BY DATE_FORMAT(ordereddate, "%m-%Y") ORDER BY ordereddate ASC;';
  db.query(sqlget,(err,result)=>{
      res.send(result);
    //  console.log(err);
  })
})




//get current month cost
router.get('/adminHome/getThisMonthCost',(req,res)=>{
  const sqlget='select ROUND(SUM(deliveryCharge)) AS deliveryCharge,YEAR(ordereddate) AS year,MONTHNAME(ordereddate) AS month FROM orders where MONTH(ordereddate)=MONTH(now()) and YEAR(ordereddate)=YEAR(now());';
  db.query(sqlget,(err,result)=>{
      res.send(result);
    //  console.log(err);
  })
})

//get last month cost
router.get('/adminHome/getLastMonthCost',(req,res)=>{
  const sqlget='SELECT ROUND(SUM(deliveryCharge)) AS lastdeliveryCharge,YEAR(ordereddate) AS year,MONTHNAME(ordereddate) AS lastMonth FROM orders WHERE YEAR(ordereddate) = YEAR(CURRENT_DATE - INTERVAL 1 MONTH) AND MONTH(ordereddate) = MONTH(CURRENT_DATE - INTERVAL 1 MONTH);';
  db.query(sqlget,(err,result)=>{
      res.send(result);
     // console.log(err);
  })
})



//get current month sales
router.get('/adminHome/getThisMonthSales',(req,res)=>{
  const sqlget='select ROUND(SUM(amount)) AS amount,YEAR(ordereddate) AS year,MONTHNAME(ordereddate) AS month FROM orders where MONTH(ordereddate)=MONTH(now()) and YEAR(ordereddate)=YEAR(now());';
  db.query(sqlget,(err,result)=>{
      res.send(result);
    //  console.log(err);
  })
})

//get last month sales
router.get('/adminHome/getLastMonthSales',(req,res)=>{
  const sqlget='SELECT ROUND(SUM(amount)) AS amount,YEAR(ordereddate) AS year,MONTHNAME(ordereddate) AS month FROM orders WHERE YEAR(ordereddate) = YEAR(CURRENT_DATE - INTERVAL 1 MONTH) AND MONTH(ordereddate) = MONTH(CURRENT_DATE - INTERVAL 1 MONTH);';
  db.query(sqlget,(err,result)=>{
      res.send(result);
    //  console.log(err);
  })
})


//get current month Revenue
router.get('/adminHome/getThisMonthRevenue',(req,res)=>{
  const sqlget='select ROUND(SUM((deliveryCharge*0.1) +amount)) AS amount,YEAR(ordereddate) AS year,MONTHNAME(ordereddate) AS month FROM orders where MONTH(ordereddate)=MONTH(now()) and YEAR(ordereddate)=YEAR(now());';
  db.query(sqlget,(err,result)=>{
      res.send(result);
   //   console.log(err);
  })
})

//get last month Revenue
router.get('/adminHome/getLastMonthRevenue',(req,res)=>{
  const sqlget='SELECT ROUND(SUM((deliveryCharge*0.1) +amount)) AS amount,YEAR(ordereddate) AS year,MONTHNAME(ordereddate) AS month FROM orders WHERE YEAR(ordereddate) = YEAR(CURRENT_DATE - INTERVAL 1 MONTH) AND MONTH(ordereddate) = MONTH(CURRENT_DATE - INTERVAL 1 MONTH);';
  db.query(sqlget,(err,result)=>{
      res.send(result);
      // console.log(err);
  })
})



////////////////////////////sales page- chart

router.get('/adminSales/getIncomeAnalytics',(req,res)=>{
  const sqlget='SELECT DATE_FORMAT(ordereddate, "%b") AS name,COUNT(*) AS count,DATE_FORMAT(ordereddate, "%m-%Y") AS mName, ROUND(SUM((deliveryCharge*0.1) +amount)) AS totalIncome,ROUND(SUM(amount)) AS salesIncome, ROUND(SUM(deliveryCharge*0.1)) AS deliveryIncome FROM orders WHERE ordereddate <= NOW() and ordereddate >= Date_add(Now(),interval - 12 month) GROUP BY DATE_FORMAT(ordereddate, "%m-%Y") ORDER BY ordereddate ASC;';
  db.query(sqlget,(err,result)=>{
      res.send(result);
      // console.log(err);
  })
})






/////////////deliveries chart cash

router.get('/adminDeliveries/getDeliveryCountLabel',(req,res)=>{
//  const sqlget="select paymentDateTime,COUNT(*) AS data,DAY(paymentDateTime)AS dateD, MONTHNAME(paymentDateTime) AS monthName,DATE_FORMAT(paymentDateTime,'%b') AS shortMonth,DATE_FORMAT(paymentDateTime, '%Y-%m-%d') AS newdateTime from payment where paymentType='cash' AND paymentDateTime > now() - INTERVAL 7 day GROUP BY DAY(paymentDateTime) ORDER BY paymentDateTime;";
 const sqlget="select DAY(paymentDateTime)AS dateD from payment where  paymentType IN ('cash','online') AND paymentDateTime > now() - INTERVAL 10 day GROUP BY DAY(paymentDateTime) ORDER BY paymentDateTime;";
 db.query(sqlget,(err,result)=>{
     res.send(result);
      console.log(err);
 })
})



router.get('/adminDeliveries/getDeliveryCountCash',(req,res)=>{
   const sqlget="select paymentDateTime,COUNT(*) AS data,DAY(paymentDateTime)AS dateD, MONTHNAME(paymentDateTime) AS monthName,DATE_FORMAT(paymentDateTime,'%b') AS shortMonth,DATE_FORMAT(paymentDateTime, '%Y-%m-%d') AS newdateTime from payment where paymentType='cash' AND paymentDateTime > now() - INTERVAL 10 day GROUP BY DAY(paymentDateTime) ORDER BY paymentDateTime;";
 // const sqlget="select DAY(paymentDateTime)AS dateD from payment where paymentType='cash' AND paymentDateTime > now() - INTERVAL 7 day GROUP BY DAY(paymentDateTime) ORDER BY paymentDateTime;";
  db.query(sqlget,(err,result)=>{
      res.send(result);
       console.log(err);
  })
})

router.get('/adminDeliveries/getDeliveryCountOnline',(req,res)=>{
   const sqlget="select paymentDateTime,COUNT(*) AS data,DAY(paymentDateTime)AS dateD, MONTHNAME(paymentDateTime) AS monthName,DATE_FORMAT(paymentDateTime,'%b') AS shortMonth,DATE_FORMAT(paymentDateTime, '%Y-%m-%d') AS newdateTime from payment where paymentType='online' AND paymentDateTime > now() - INTERVAL 10 day GROUP BY DAY(paymentDateTime) ORDER BY paymentDateTime;";
  //const sqlget="select DAY(paymentDateTime)AS dateD from payment where paymentType='cash' AND paymentDateTime > now() - INTERVAL 7 day GROUP BY DAY(paymentDateTime) ORDER BY paymentDateTime;";
  db.query(sqlget,(err,result)=>{
      res.send(result);
       console.log(err);
  })
})




//contactus 
router.get('/adminContactUS/getDetails',(req,res)=>{
  const sqlget="SELECT * FROM contactus";
 db.query(sqlget,(err,result)=>{
     res.send(result);
      console.log(err);
 })
})

//complain 
router.get('/adminComplaints/getDetails',(req,res)=>{
  const sqlget="SELECT * FROM complaints;";
 db.query(sqlget,(err,result)=>{
     res.send(result);
      console.log(err);
 })
})



//admin delivery history page
router.get('/adminDelivery/getDeliveryHistoryDetailsGroup',(req,res)=>{
  const sqlget="SELECT SUM(deliveryAgentsPayment)AS deliveryFee,deliveryId,SUM(deliveryLoad) AS totalLoad,Date(deliveryassigneddate) AS deliveryDate,vehicle.vehicleId, DATE_FORMAT(deliveryassigneddate,'%b') AS shortMonth,DAY(deliveryassigneddate)AS dateD, YEAR(deliveries.deliveryassigneddate) AS year FROM ((deliveries INNER JOIN orders ON deliveries.orderId=orders.orderId) INNER JOIN vehicle  ON deliveries.deliveryAgentPhoneNumber=vehicle.deliveryAgentPhoneNumber) WHERE deliveries.orderId=orders.orderId   GROUP BY deliveries.deliveryId  ORDER BY deliveries.deliveryassigneddate ASC;";
 db.query(sqlget,(err,result)=>{
     res.send(result);
      console.log(err);
 })
})


router.get('/adminDelivery/getDeliveryHistoryAll',(req,res)=>{
  const sqlget="SELECT * FROM deliveries INNER JOIN orders ON deliveries.orderId=orders.orderId;";
 db.query(sqlget,(err,result)=>{
     res.send(result);
      console.log(err);
 })
})



module.exports = router;
