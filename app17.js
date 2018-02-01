//serving a html page
//res object is a writable stream
var http = require('http');
var fs = require('fs');

//this reads the index.html page and write it to the response object using the pipe
var server = http.createServer(function(req,res){
    /*content type should be html. if we put 'text/plain' 
    the browser will treat it as a text file and print the 
    html as text in the browser*/
    console.log(req.url);
    res.writeHead(200,{'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);// inside brackets we put where the read data should be put  
});

server.listen(3000,'127.0.0.1');
console.log('listening');