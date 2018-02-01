// readable streams and a buffer
var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

myReadStream.on('data',function(chunk){
    console.log("new chunk recieved");
    console.log(chunk);
});