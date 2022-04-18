const express = require('express')
const mysql = require('mysql')

var app = express()

var connetion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'world',
})

app.get('/', function (req, res) {
    let sql = "SELECT * FROM CITY";
    connetion.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result)
    })
})

app.listen(8000, function () {
    console.log("server listening on port 8000");
    connetion.connect(function () {
        console.log("database connected");
    })
})