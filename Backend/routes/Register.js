const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const db = require("../connection/database");

//login
router.post("/user/login/", (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const password = req.body.password;
  const sqlSelect = "SELECT * FROM user WHERE phoneNumber=? AND  password=?";
  db.query(sqlSelect, [phoneNumber, password], (err, result) => {
    if (err) {
      res.send({ err: err });
      console.log(err);
    }

    console.log(result);
    if (result.length > 0) {
      // res.send(result);
      res.send(result);

      //  bcrypt.compare(password, result[0].password, (error,response)=>{
      //    if(response){
      // res.send(result);
      //  console.log(result[0].phoneNumber);
      //  console.log(result[0].userCategory);

      //  const payload={
      //      "phoneNumber":result[0].phoneNumber,
      //      "userCategory": result[0].userCategory

      //  }

      //  jwt.sign(payload,'secret',{expiresIn:'10h'},(err,token)=>{
      //     res.json({
      //         token: token,
      //         message: userCategory,

      //     })
      //     console.log(token)
      //  })

      //    }else{
      //     res.send({message:"Wrong username/Password combination"});
      //    }
      //  })
    } else {
      res.send({ message: "Wrong username/Password combination" });
    }
  });
});

///get PhoneNumber is Valid
router.get("/user/getPhoneNumber", (req, res) => {
  const sqlget = "SELECT phoneNumber FROM user";
  db.query(sqlget, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

//delivery Agent Register........................................
router.post("/user/registerAgent", (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const password = req.body.password;
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const address = req.body.address;
  // const nic = req.body.nic;
  // const drivingLicence = req.body.drivingLicence;

  const sqlRegisterAgent =
    "INSERT INTO deliveryagent (phoneNumber, password,email, firstName, lastName, address) VALUE (?,?,?,?,?,?)";
  // "INSERT INTO deliveryagent (phoneNumber, password,email, firstName, lastName, address, nic, drivingLicence) VALUE (?,?,?,?,?,?,?,?)";
  db.query(
    sqlRegisterAgent,
    [
      phoneNumber,
      password,
      email,
      firstName,
      lastName,
      address,
      // nic,
      // drivingLicence,
    ],
    (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log(err);
      }
    }
  );
});
//delivery Agent Register........................................

//Farmer Register........................................

router.post("/user/registerFarmer", (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const password = req.body.password;
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const address = req.body.address;

  const sqlRegisterFarmer =
    "INSERT INTO farmer (phoneNumber, password,email, firstName, lastName, address) VALUE (?,?,?,?,?,?)";
  db.query(
    sqlRegisterFarmer,
    [phoneNumber, password, email, firstName, lastName, address],
    (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log(err);
      }
    }
  );
});
//Farmer Register........................................

//Company Staff Register........................................
router.post("/user/registerStaff", (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const password = req.body.password;
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const address = req.body.address;
  const nic = req.body.nic;
  const roleId = req.body.roleId;

  const sqlRegisterAgent =
    "INSERT INTO compantstaff (phoneNumber, password,email, firstName, lastName, address, nic,roleId, appointedDate) VALUE (?,?,?,?,?,?,?,?,NOW())";
  db.query(
    sqlRegisterAgent,
    [phoneNumber, password, email, firstName, lastName, address, nic, roleId],
    (err, result) => {
      if (err) {
        res.send({ err: err });
        console.log(err);
      }
    }
  );
});
//Company Staff Register........................................

module.exports = router;
