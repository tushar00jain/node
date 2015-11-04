var http = require('http')
links = process.argv.slice(2)
var contents = []
var cbacks = 0

function juggle(callback) {
	links.forEach(function(link, i, links) {
		http.get(link, function(response) {
			response.setEncoding("utf8")
			var str = ""
			response.on("data", function(data) {
				str = str.concat(data)
			})
			response.on("end", function(){
				contents[i] = str
				cbacks++
				if(cbacks === 3) {
					callback()
				}
			})
		})
	})
}

juggle(function() {
	contents.forEach(function(content, i, contents) {
		console.log(contents[i])
	})
})
