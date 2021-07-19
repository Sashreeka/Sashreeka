const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const mysql = require("mysql");

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "sashreeka",
// });
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "sashreeka_db",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//login
app.post("/user/login", (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const password = req.body.password;
  const sqlSelect = "SELECT * FROM user WHERE phoneNumber=? AND  password=?";
  db.query(sqlSelect, [phoneNumber, password], (err, result) => {
    if (err) {
      res.send({ err: err });
      console.log(err);
    }

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
      res.send({ message: "User doesn't exist" });
    }
  });
});

app.get("/api/get",(req,res)=>{
   // console.log('hi anu');
    const sqlget="select * from fertilizer";
    db.query(sqlget,(err,result)=>{
        console.log(result);
        res.send(result);
    })
    
})

// app.get("/api/order",(req,res)=>{
//     // console.log('hi anu');
//      const sqlget="select * from orders";
//      db.query(sqlget,(err,result)=>{
//          console.log(result);
//          res.send(result);
//      })

//  })
// const loginRoutes=require("./routes/LoginRoutes");
//  app.use(loginRoutes);

app.listen(4000, () => {
  console.log("running port 3001");
});

//delivery Agent Register........................................
app.post("/user/registerAgent", (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const password = req.body.password;
  const sqlRegisterAgent =
    "INSERT INTO user (phoneNumber, password, userCategory) VALUE (?,?,'deliveryAgent')";
  db.query(sqlRegisterAgent, [phoneNumber, password], (err, result) => {
    if (err) {
      res.send({ err: err });
      console.log(err);
    }
  });
});
//delivery Agent Register........................................

//Farmer Register........................................
app.post("/user/registerFarmer", (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const password = req.body.password;
  const sqlRegisterFarmer =
    "INSERT INTO user (phoneNumber, password, userCategory) VALUE (?,?,'farmer')";
  db.query(sqlRegisterFarmer, [phoneNumber, password], (err, result) => {
    if (err) {
      res.send({ err: err });
      console.log(err);
    }
  });
});
//Farmer Register........................................
