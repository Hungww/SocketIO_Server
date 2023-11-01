var http = require('http'),
socketIO = require('socket.io'),

port = 8888,
ip = '127.0.0.1',

server = http.createServer().listen(port, ip, function(){
    console.log('Socket.IO server started at %s:%s!', ip, port);
}),

io = socketIO.listen(server);

var run = function(socket){
    console.log('connect....');


    socket.on('echotest', function (data) {
        console.log(data);
    })

    socket.on('message', function(msg){
        console.log('Received: ' + msg);
    });

    socket.disconnect('disconnect', function() {
        console.log('Client disconnect');
    });
}

io.sockets.on('connection', socket => {{
    console.log('connect....');
    socket.emit('hello', 'Hello from Socket.IO');
    socket.send('Hello from SocketIO');

}});