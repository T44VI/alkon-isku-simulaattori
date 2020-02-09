const app = require("express")();
const server = require("http").createServer(app);
const sockets = require("socket.io")(server);
let i = 0;
sockets.on("connection", socket => {
  console.log("a user connected");
  socket.emit("message", "connected");

  socket.on("message", (data: any) => {
    console.log(data);
  });

  socket.on("joinRoom", (data: any) => {
    socket.join(data, () => {
      sockets.to(data).emit("message", "New user joined");
    });
  });

  socket.on("clicked", () => {
    console.log("clicked");
    socket.broadcast.emit("message", "Other User Clicked");
  });

  socket.on("disconnect", reason => {
    console.log("user disconnected");
  });
});
server.listen(4000);
console.log("Running");
