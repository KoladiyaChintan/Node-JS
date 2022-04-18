const express = require("express");
const res = require("express/lib/response");

var app = express()

app.get('/', function (req, res) {
    res.send("server created");
})

app.listen(8000, function () {
    console.log("server created");
})