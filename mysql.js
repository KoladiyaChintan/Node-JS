const res = require('express/lib/response');
const mysql = require('mysql')

var connetion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'world'
})

connetion.connect(function (err) {
    if (err) throw err;
    console.log("database connected");
    var sql = "SELECT * FROM CITY";
    connetion.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        // console.log(result);
    })
})