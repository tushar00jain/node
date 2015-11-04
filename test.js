var array = []
array[3] = "adf"
array[2] = "asd"
array[0] = "hfhdfg"
array[1] = "asdfsgsfhfh"

function logvalue(callback) {
	array[4] = "aehdf"
	callback()
}

logvalue(function() {
	array.forEach(function(content) {
		console.log(content)
	})
})

// function logsize() {
// 	console.log(array.size)
// }
//
// function logvalue(callback) {
// 	array.forEach(function(value) {
// 		console.log(value)
// 	})
// 	callback()
// }
//
// logvalue(logsize)

// function logvalue(callback) {
// 	array.forEach(function(value) {
// 		console.log(value)
// 	})
// 	callback()
// }
//
// logvalue(function() {
// 	console.log(array.size)
// })
