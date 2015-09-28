var express = require('express');
var app = express();
var http = require('http').Server(app);
var fs = require('fs'); // not needed anymore
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000);
