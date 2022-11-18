//import express
const express = require('express');
const cors = require('cors');
const db = require('./config/db')

//create app
const app = express();

//automatically parses data from frontend
app.use(express.json());
app.use(cors());


app.post('/register', (req,res) => {

    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    db.query("INSERT INTO Accounts (username,password,email) VALUES (?,?,?)", [username,password,email], 
    (err,result)=>{
        console.log(err);
        
    });
});

//startup backend server running on port:5000
app.listen(3001,() => {console.log("Server started on port 3001")} );