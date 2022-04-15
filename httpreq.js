var finalhandler = require("finalhandler")
var http = require("http")
var Router = require("router")
var request = require('request')
var bodyparser = require('body-parser')
var json = bodyparser.json();

var formData = {
    "name": " sds",
    "email": "dsra_@ssbdruen.io",
    "gender": "male",
    "status": "inactive"
}

var userformdata = {
    "title": "title",
    "body": "test"
}

var router = Router()

router.post('/user', json, (req, res) => {
    request({
        method: 'post',
        uri: 'https://gorest.co.in/public/v2/users',
        form: formData,
        json: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 71b5cf1e457f433612d6e3de852247d3b29c1be8d2ffcccb46796b939b266173'
        }
    },
        function (request, responce, body) {
            res.end(body)
        }
    )
})

router.post('/post', json, (req, res) => {
    request({
        method: 'post',
        uri: 'https://gorest.co.in/public/v2/users/3425/posts',
        form: req.body,
        json: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 71b5cf1e457f433612d6e3de852247d3b29c1be8d2ffcccb46796b939b266173'
        }
    },
        function (request, response, body) {
            res.end(JSON.stringify(body))
            console.log(req.json)
        }
    )
})

router.get('/get', (req, res) => {
    request({
        method: 'get',
        uri: 'https://gorest.co.in/public/v2/users/3425/posts',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 71b5cf1e457f433612d6e3de852247d3b29c1be8d2ffcccb46796b939b266173'
        }
    },
        function (request, response, body) {
            res.end(body)
        })
})

http.createServer(function (req, res) {
    router(req, res, finalhandler(req, res))
    console.log("server created")
}).listen(3000, () => {
    console.log('server running on 3000');
})