const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "8814",
    database:"trading_app" 
})

module.exports = db;