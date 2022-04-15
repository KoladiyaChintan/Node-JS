const csv = require('csv-parser')
const fs = require('fs');
var result = [];

fs.createReadStream('test.csv')
    .pipe(csv())
    .on('data', (data) => result.push(data))
    .on('end', () => {
        console.log(result);
    }
    )
