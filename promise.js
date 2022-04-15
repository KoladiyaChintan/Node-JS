var Record = [];

function insertrecord(record) {
    return new Promise(function (resolve, reject) {
        Record.push(record)
        console.log("record create")
        resolve({ record, result: true })
    });
}

function selectrecord() {
    return new Promise(function (resolve, reject) {
        console.log("record : ")
        resolve(Record)
    })
}

insertrecord({ name: "chintan", email: "chintan@gmail.com" })
    .then(function (res) {
        return selectrecord(res)
    })
    .then(function (res) {
        console.log(res)
    })
    .catch(function (err) {
        console.log(err)
    })
    .finally(function (err) {
        console.log("complete")
    })