const { Server } = require("socket.io");

const userSockets = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "*", // Adjust this to your frontend's URL in production
            methods: ["GET", "POST"],
        },
    });

    io.on("connection", (socket) => {
        console.log(`User connected: ${socket.id}`);

        // Event for user joining
        socket.on("user:join", (userId) => {
            console.log(`User ${userId} joined`);
            socket.join(userId); // Join a room with the user's ID
        });

        // Event for sending notifications
        socket.on("notification:send", ({ recipientId, notification }) => {
            console.log(`Sending notification to ${recipientId}`);
            io.to(recipientId).emit("notification:receive", notification);
        });

        // Event for user disconnecting
        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });
};

module.exports = userSockets;