var fs = require("fs")

// fs.writeFile('test.txt', "Hello World", (req, res) => {
//     console.log("write text")
// })

// // fs.rename('test.txt', 'change.txt', () => { })
// const text = "add this text"

// fs.appendFile('test.txt', text, (err, data) => {
//     console.log("change text")
// })
fs.readFile('test.txt', 'utf-8', (err, data) => {
    console.log(data)
})
