const express=require('express');
const router=express.Router();
const db=require('../../connection/database');





//display fertilizer  
router.get("/getfertilizer", (req, res) => {
    // console.log('hi anu');
    const sqlget = "select * from fertilizer";
    db.query(sqlget, (err, result) => {
      console.log(result);
      res.send(result);
    });
  });

//  display the delivery agent details..................
router.get("/admin/viewDAgentDetails", (req, res) => {
    const sqlget = "select * from deliveryagent";
    db.query(sqlget, (err, result) => {
      console.log(result);
      res.send(result);
    });
  });

//display the company staff details..................
router.get("/admin/viewCStaffDetails", (req, res) => {
   // const sqlget = "select * from companystaff";
   const sqlget="select userId,phoneNumber,concat(firstName,'  ',lastName) as name,nic,active from companystaff;";
    db.query(sqlget, (err, result) => {
      console.log(result);
      res.send(result);
    });
  });  


// display delivery details........................
router.get("/admin/viewDeliveryDetails", (req, res) => {
    const sqlget = "select * from deliveries";
    db.query(sqlget, (err, result) => {
      console.log(result);
      res.send(result);
    });
  });


//view  the company staff  details..................
router.get("/admin/viewStafffDetails/:userId", (req, res) => {
    let userId = req.params.userId;
  
    const sqlget = "select * from companystaff where userId=?";
    db.query(sqlget, userId, (err, result) => {
      console.log(result);
      res.send(result);
    });
  });
  






  module.exports=router;