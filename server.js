var express = require('express');
//var http = require('http');
var bodyParser = require('body-parser');
mongoose = require('mongoose');
var app = express();

// var apiKey = '2d65bb45-3efb-46ad-b581-2268a64b1bcf';

app.use(express.static(__dirname+"/client"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

var server = app.listen(6789);

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket){
	console.log('socket connected: ', socket.id);
	socket.on('grab_beer', function (data){
		
		socket.emit('server_response', {response: 'sockets are the best!'});
	});
});