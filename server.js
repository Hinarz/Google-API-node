
// Load Express (a node.js framework), socket.io (for a fast data stream), and osc (to send the message to MAX)
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var osc = require("osc");

var test = true;

// This is the port on which the website is available
server.listen(3000);

// This is just to tell the server to use the folder app/ as the public web folder
// This way, if your index.html asks for the files scripts.js and style.js, this is where the server will search for them
app.use(express.static(__dirname + '/app'));

// If the web client asks for the root folder, deliver him index.html
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/app/index.html');
});


	// When socket io receives a message of the type "clientMessage" from the web client...

