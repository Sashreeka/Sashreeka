const express = require("express");
const router = express.Router();
const db = require("../connection/database");

 

router.post("/user/contactus",(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const phoneNumber =req.body.phone;
    const massage=req.body.massage;


    const sqlInsert="INSERT INTO contactus(name, email, phoneNumber, massage) VALUES (?,?,?,?)";

    db.query(
        sqlInsert,
        [
            name,email,phoneNumber,massage
        ],
        (err,result)=>{
            if(err){
                //res.send({ err: err });
            console.log(err);
            }
            
            
        }
    );
      
router.post("/user/contactus", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phoneNumber = req.body.phone;
  const massage = req.body.massage;

  const sqlInsert =
    "INSERT INTO contactus(name, email, phoneNumber, massage) VALUES (?,?,?,?)";

  db.query(sqlInsert, [name, email, phoneNumber, massage], (err, result) => {
    if (err) {
      //res.send({ err: err });
      console.log(err);
    } else {
      res.send(result);
    }
  });

});

});

//INSERT INTO `contactus`(`id`, `name`, `email`, `phoneNumber`, `massage`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5])

module.exports = router;
