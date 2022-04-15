var os = require("os")

console.log(os.arch())
console.log(os.freemem())
console.log(os.totalmem())

const freememory = os.freemem();
console.log(`${freememory / 1024 / 1024 / 1024}`)

const totalmemory = os.totalmem();
console.log(`${totalmemory / 1024 / 1024 / 1024}`)