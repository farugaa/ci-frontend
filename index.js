var http = require('http')

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plan"})
	response.end("\nHello World")
}).listen(8080);
