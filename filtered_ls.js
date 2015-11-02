var fs = require('fs')
var path = require('path')

modular.exports = function(dir_name, filter, callback) {
	fs.readdir(dir_name, function(err, list) {
		if (err) return callback(err)
		if (path.extname(list[i]) == '.' + filter) {
			callback(null, data)
		}
	})
}
