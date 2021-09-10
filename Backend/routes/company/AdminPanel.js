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
router.post("/addFertilizer", upload.single("image"), (req, res) => {
  const name = req.body.name;
  const image = req.file.filename;
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
router.put("/updateFertilizerItem/:id", upload.single("image"), (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const image = req.file.filename;
  const description = req.body.description;
  const offer = req.body.offer;
  const unitPrice = req.body.unitPrice;
  const unitWeight = req.body.unitWeight;
  const stock = req.body.stock;
  const reOrderLevel = req.body.reOrderLevel;
  const measurementUnit = req.body.measurementUnit;
  const caption = req.body.caption;
  name,
    description,
    offer,
    unitPrice,
    unitWeight,
    photo,
    stock,
    reOrderLevel,
    measurementUnit,
    caption;

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
      // console.log(result);
      // res.send(result);
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
    // console.log(result);
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
    "select userId,phoneNumber,concat(firstName,'  ',lastName) as name,nic,active from companystaff;";
  db.query(sqlget, (err, result) => {
    //    console.log(result);
    res.send(result);
  });
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
    console.log(err);
    console.log(result);
    res.send(result);
  });
});

// get all privilages & roles ..................
router.get("/admin/getRoleNames", (req, res) => {
  const sqlget =
    "SELECT `COLUMN_NAME` FROM `INFORMATION_SCHEMA`.`COLUMNS` WHERE `TABLE_SCHEMA`='sashreeka_db' AND `TABLE_NAME`='role'";
  db.query(sqlget, (err, result) => {
    console.log(err);
    console.log(result);
    res.send(result);
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

////SELECT DATE_FORMAT(date,'%Y-%m') AS date FROM ordercontainsfertilizer;

module.exports = router;
