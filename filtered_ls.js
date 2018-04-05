var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], (err, list) => {
    list.forEach((filename) => {
        if (path.extname(filename) === '.' + process.argv[3]) {
            console.log(filename);
        }
    });
});

//note: below is the "official solution"
// var fs = require('fs');
// var path = require('path');
// var folder = process.argv[2]
// var ext = '.' + process.argv[3]
// 
// fs.readdir(folder, function(err, files) {
// if (err) return console.error(err)
// files.forEach(function(file) {
// if (path.extname(file) === ext) {
// console.log(file)
// }
// })
// })