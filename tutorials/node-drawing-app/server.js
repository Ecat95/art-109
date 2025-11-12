

var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("hello world");

var socket = require('socket.io');

var io = socket(server);

io.socket.on('connection', newConnection);

function newConnection(socket){
    console.log('newConnection: ' + socket.id)

}