var express = require('express')
var path = require('path')
var app = express()

app.param('id', function(req, res, next, id) {
	req.id = require('crypto').createHash('sha1').update(new Date().toString() + id).digest('hex')
	next()
})

app.put('/message/:id', function(req, res) {
	res.end(req.id)
})

app.listen(process.argv[2])

// var path = require('path');
// var express = require('express');
// var crypto = require('crypto');
// var app = express();
//
// // app.put('/message/:id', function (req, res) {
// //   var id = req.params.id;
// //   var str = crypto.createHash('sha1').update(new Date().toDateString().toString() + id).digest('hex');
// //   res.send(str);
// // });
// //
// // app.listen(process.argv[2]);
