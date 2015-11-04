var http = require('http')

http.get(process.argv[2], function(response) {
	response.setEncoding("utf8")
	var str = ""
	response.on("data", function(data) {
		str = str.concat(data)
	})
	response.on("error", function(error) {
		console.log(error)
	})
	response.on("end", function(){
		console.log(str.length)
		console.log(str)
	})
})

// var bl = require('bl')
//
// http.get(process.argv[2], function(response) {
// 	response.setEncoding("utf8")
// 	response.pipe(bl(function(err, data) {
// 		if(err) done(err)
//		console.log(data.toString().length)
// 		console.log(data.toString())
// 	}))
// })
