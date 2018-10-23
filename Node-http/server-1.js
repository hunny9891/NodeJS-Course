var http = require('http');

var hostname =  'localhost';
var port = 3000;

// Configure the server here to do things

var server = http.createServer(function(req, res){
	console.log(req.headers);
	
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end('<h1>Hello World</h1>');
})

// Start the server using below code.

server.listen(port, hostname, function() {
	console.log('Server running at http://'+hostname+':'+port+'/');
});