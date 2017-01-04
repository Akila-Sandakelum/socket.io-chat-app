var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 8000;

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket) {
    console.log('New connection is made');

    socket.emit('message-from-server', {
        greeting: 'Hello from server'
    });

    socket.on('message-from-client', function(msg){
        console.log(msg);
    })

});

server.listen(port, function(){
    console.log("Server is running on port 8000");
});