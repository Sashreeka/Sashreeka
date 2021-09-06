const express=require('express');
const router=express.Router();
const db=require('../../connection/database');





//display fertilizer  
router.get("/getfertilizer", (req, res) => {
    // console.log('hi anu');
  //  const sqlget = "select * from fertilizer";
  const sqlget='SELECT CONCAT(unitWeight," ",measurementUnit) AS unit,fertilizerId,name,CONCAT(offer,"%")AS offer,unitPrice,photo,stock,reOrderLevel FROM fertilizer';
    db.query(sqlget, (err, result) => {
    //  console.log(result);
      res.send(result);
    });
  });

//get a specific fertilizer id

router.get("/getfertilizeritem/:fertilizerId",(req,res)=>{
  const fertilizerId=req.params.fertilizerId;
  const sqlgetItem="SELECT * FROM fertilizer WHERE fertilizerId=?";
  db.query(sqlgetItem,fertilizerId,(err,result)=>{
   // console.log(result);
   res.send(result);
  })
})
//add fertilizer item

router.post('/addFertilizer',(req,res)=>{

  const name=req.body.name;
  const description=req.body.description;
  const offer=req.body.offer;

  const unitPrice=req.body.unitPrice;
  const unitWeight=req.body.unitWeight;
  const photo=req.body.photo;
  const stock=req.body.stock;
  const reOrderLevel=req.body.reOrderLevel;
  const measurementUnit=req.body.measurementUnit;
  const caption=req.body.caption;



  const sqlInsert="INSERT INTO fertilizer(name,description,offer,unitPrice,unitWeight,photo,stock,reOrderLevel,measurementUnit,caption)VALUE(?,?,?,?,?,?,?,?,?,?) ";

  db.query(sqlInsert,[name,description,offer,unitPrice,unitWeight,photo,stock,reOrderLevel,measurementUnit,caption],(err,result)=>{
   // console.log(err);
    res.send(result);
  })
})



//  display the delivery agent details..................
router.get("/admin/viewDAgentDetails", (req, res) => {
    const sqlget = "SELECT userId ,phoneNumber,email,CONCAT(firstName,' ',lastName) AS name,address,active,nic FROM deliveryagent;";
    db.query(sqlget, (err, result) => {
     // console.log(result);
      res.send(result);
    });
  });

//display farmer details.....................

router.get("/getFarmerDetails",(req,res)=>{
  const sqlGet="SELECT userId ,phoneNumber,email,CONCAT(firstName,' ',lastName) AS name,address,active,loyaltyPoints FROM farmer;";
  db.query(sqlGet,(err,result)=>{
    res.send(result);
  })
})



//display the company staff details..................
router.get("/admin/viewCStaffDetails", (req, res) => {
   // const sqlget = "select * from companystaff";
   const sqlget="select userId,phoneNumber,concat(firstName,'  ',lastName) as name,nic,active from companystaff;";
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
router.delete('/deleteProductItems/:fertilizerId',(req,res)=>{
  let fertilizerId=req.params.fertilizerId;

  const sqlDelete="delete from fertilizer where fertilizerId=?";
  db.query(sqlDelete, fertilizerId, (err,result)=>{
  //  console.log(result);
    res.send(result);
    //console.log(err);
  })


})

///sample
router.post('/save',(req,res)=>{
  const name=req.body.name;
  const image=req.body.image;
  const sql="INSERT INTO image(name,image) VALUES(?,?);";
  db.query(sql,[name,image],(err,result)=>{
    res.send(err);
   // console.log(err);
    
  })
})



////SELECT DATE_FORMAT(date,'%Y-%m') AS date FROM ordercontainsfertilizer;

  module.exports=router;