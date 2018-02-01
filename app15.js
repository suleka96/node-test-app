// writable streams and a buffer
var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe');

myReadStream.on('data',function(chunk){
    console.log("new chunk recieved");
    myWriteStream.write(chunk);
    
});