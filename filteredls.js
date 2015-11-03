var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function(err, list) {
	if (err) return done(err)
	for(i in list) {
		if (path.extname(list[i]) === '.' + process.argv[3]) {
			console.log(list[i])
		}
	}
})
