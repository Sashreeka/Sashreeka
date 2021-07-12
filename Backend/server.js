const express=require('express');
const mysql=require('mysql');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const bodyParser=require('body-parser');
const cors=require('cors');



const app=express();

const db=mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "shashreeka",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));





app.listen(3001,()=>{
    console.log("running port 3001");
})