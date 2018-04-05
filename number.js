var fs = require('fs')
var myNumber = undefined

function addOne(cb) {
    fs.readFile('number.txt', function doneReading(err, fileContents) {
        myNumber = parseInt(fileContents)
        myNumber++
        cb()
    })
}

function logMyNumber() {
    console.log(myNumber)
}

addOne(logMyNumber)