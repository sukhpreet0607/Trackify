const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "shary",
  password: "singh###",
  database: "devrack",
});

app.listen(port, () => {
  console.log("Listening");
});

app.get("/", (req, res) => {
  return res.json("From bankend");
});

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE `email`=? AND `password`=?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json("Error");
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Failed");
    }
  });
});
