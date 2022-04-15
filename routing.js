// var http = require("http")

// var server = http.createServer((req, res) => {
//     if (req.url == "/") {
//         res.end("hello this is homepage")
//     }
//     else if (req.url == "/contact") {
//         res.end("hello this is contact page")
//     }
//     else {
//         res.writeHead(404)
//         res.end("page not found")
//     }
// }).listen(8800)

var http = require("http")
var Router = require("router")
var finalhandler = require("finalhandler")
var fs = require("fs")

var server = http.createServer((req, res) => {
    router(req, res, finalhandler(req, res))
}).listen(8000)

var router = Router()
router.get('/', function (req, res) {
    res.end(
        fs.readFileSync('test.txt', () => { })
    )
})
router.get('/home', function (req, res) {
    res.end("this is home page")
})