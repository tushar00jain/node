var fs = require('fs')
var http = require('http')
var url = require('url')

var server = http.createServer(function(request, response) {
	if(request.method != 'GET') {
		console.error("error")
	}

	json = url.parse(request.url, true)
	var date = new Date(json.query.iso)

	if(json.pathname === "/api/parsetime") {
		response.writeHead(200, {"Content-Type" : "application/json"})
		response.end(JSON.stringify(
			{
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		}
		))

	} else if(json.pathname === "/api/unixtime") {
		response.writeHead(200, {"Content-Type" : "application/json"})
		date = new Date
		response.end(JSON.stringify(
			{
			"unixtime": date.getTime()
		}
		))
	} else {
		response.writeHead(404)
		response.write()
	}

})

server.listen(Number(process.argv[2]))
