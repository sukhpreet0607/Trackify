const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const app = express();
const port = 5000;
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "shary",
    password: "singh###",
    database: "devrack"
})

app.get('/',(req,res)=>{
    return res.json("From bankend");
})

app.get("/users",(req,res)=>{
    const sql  = "SELECT * FROM users";
    db.query(sql,(err,data)=>{
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.listen(port,(req,res)=>{
    console.log("Listening");
})

