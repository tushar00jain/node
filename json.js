var fs = require('fs')
var http = require('http')
var map = require('through2-map')

var server = http.createServer(function(request, response) {
	if(request.method != 'GET') {
		console.error("error")
	}
})

server.listen(Number(process.argv[2]))
