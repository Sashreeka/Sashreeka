const express = require("express");
const router = express.Router();
const db = require("../../connection/database");

//display fertilizer
router.get("/getfertilizer", (req, res) => {
  // console.log("Admin Panel Get Fertlizer");
  const sqlget = "select * from fertilizer";
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
  const sqlget = "select * from deliveryagent";
  db.query(sqlget, (err, result) => {
    // console.log(result);
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

// get profile data from farmer table

// router.get("/getProfileData", (req, res) => {
//   console.log("Admin Panel getProfileData");

//   const sqlget = "select * from farmer";
//   db.query(sqlget, (err, result) => {
//     console.log(result);
//     res.send(result);
//   });
// });

module.exports = router;
