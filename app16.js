// using pipes. pipes are faster than streams and buffers
//res object is a writable stream
var http = require('http');
var fs = require('fs');

//this reads the test from readMe.txt and write it to the response object using the pipe
var server = http.createServer(function(req,res){
    console.log(req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    myReadStream.pipe(res);    
});

server.listen(3000,'127.0.0.1');
console.log('listening');