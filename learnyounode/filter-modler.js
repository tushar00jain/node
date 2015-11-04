var modular = require('./modular.js')

modular(process.argv[2], process.argv[3], function(err, arr) {
	if (err) return done(err)
	for(i in arr) {
		console.log(arr[i])
	}
})
