const fs = require("fs")
const http = require("http")

const server = http.createServer((req, res) => {
    const stream = fs.createReadStream('test.txt')
    stream.pipe(res)
    console.log("stream create")
}).listen(3000)