//import express
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "8814", 
    database: "Trading_app"
});
//create app
const app = express();

//automatically parses data from frontend
app.use(express.json());
app.use(cors());

//startup backend server running on port:5000
app.listen(5000,() => {console.log("Server started on port 5000")} );

app.post('/register', (req,res) => {

    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    db.query("INSERT INTO Accounts (username,password,email) VALUES (?,?,?)", [username,password,email], 
    (err,result)=>{
        console.log(err);
    });
});