server = require("http").Server();
var SocketIO = require("socket.io");
var io = SocketIO.listen(server);

io.sockets.on("connection", function (socket) {
  console.log("connect");
  socket.on("message", function (data) {
    console.log(data);
  });
});
server.listen(3000);
