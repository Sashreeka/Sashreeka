// const router = require("express").Router();
// const db =  require('../connection/database');
// const bcrypt = require("bcrypt");
// const saltRounds = 10;


// //login
// router.post('/user/login',(req,res)=>{
//     const phoneNumber=req.body.phoneNumber;
//     const password=req.body.password;
//     const sqlSelect="SELECT * FROM user WHERE phoneNumber=? AND  password=?";
//     db.query(sqlSelect,{phoneNumber,password},
//         (err,result) => {

//         if(err){
//             res.send({err: err});
//         }

//         if(result.length > 0){
//            // res.send(result);
//           // res.send(result);
//          //  bcrypt.compare(password, result[0].password, (error,response)=>{
//                if(response){
//                 // res.send(result);
//                  console.log(result[0].phoneNumber);

//                 //  const payload={
//                 //      "telephone":result[0].telephone,
//                 //  }

//                 //  jwt.sign(payload,'secret',{expiresIn:'10h'},(err,token)=>{
//                 //     res.json({
//                 //         token: token,
                        
//                 //     })
//                 //     console.log(token)
//                 //  })

//                }else{
//                 res.send({message:"Wrong username/Password combination"});
//                }
//          //  })

//         }else{

//             res.send({message:"User doesn't exist"});
//         }

//     })
// })

