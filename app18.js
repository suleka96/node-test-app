//serving jason
var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200,{'ContentType': 'application/json'});
    var myObj = {
        name: 'Suleka',
        job: 'Helmini',
        age: 22
    }
    /*end method expects a string or a buffer.
    so cannot send a json object to the end function.
    we have to parse the jason object into a json string
    */
    res.end(JSON.stringify(myObj));

});

server.listen(3000,'127.0.0.1');
console.log('listening');