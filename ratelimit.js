var express = require('express')
var ratelimit = require('express-rate-limit')
var app = express()

var limiter = ratelimit({
    max: 10,
    windowMs: 10000
})
app.use(limiter)

app.get('/', limiter, function (req, res) {
    res.send("hello")
})

app.listen(8000)