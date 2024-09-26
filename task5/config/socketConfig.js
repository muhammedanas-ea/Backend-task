export const configSocket = (io) => {
  io.on("connect", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("message", (msg) => {
      console.log(`Message from ${socket.id}: ${msg}`);
      io.emit("message", msg);
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};
