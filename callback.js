function callbackfun(value) {
    console.log("callback function created", value)
}

function insertrecord(data, callback) {
    var result = { data, result: true }
    console.log("data insert")
    callback(result)
}

insertrecord("hello", callbackfun)