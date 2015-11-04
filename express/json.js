var express = require('express')
var fs = require('fs')
var path = require('path')
var app = express()

app.get('/books', function(req, res) {

	var string = fs.readFile(process.argv[3], function(err, data) {
		if(err) console.log(err)
		object = JSON.parse(data)
		res.json(object)
	})
})

app.listen(process.argv[2])
