var http = require("http")
var fs = require('fs')

var file = fs.readFileSync('test.txt')

var server = http.createServer((req, res) => {
    res.end(file)
}).listen(8000)

console.log("server created")


