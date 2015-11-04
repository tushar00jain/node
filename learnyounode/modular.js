var fs = require('fs')
var path = require('path')

module.exports = function(directory, filter, callback) {
	fs.readdir(directory, function(err, data) {
		if (err) return callback(err)
		arr = []
		for(i in data) {
			if (path.extname(data[i]) === '.' + filter) {
				arr.push(data[i])
			}
		}
		callback(null, arr)
	})
}
