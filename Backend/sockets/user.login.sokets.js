const { Server } = require("socket.io");

const io = new Server({
    cors: {
        origin: "*", // Replace with your frontend URL in production
        methods: ["GET", "POST"],
    },
});

const activeUsers = new Map();

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Handle user login
    socket.on("user:login", (userId) => {
        activeUsers.set(userId, socket.id);
        console.log(`User logged in: ${userId}`);
        io.emit("active:users", Array.from(activeUsers.keys()));
    });

    // Handle user logout
    socket.on("user:logout", (userId) => {
        activeUsers.delete(userId);
        console.log(`User logged out: ${userId}`);
        io.emit("active:users", Array.from(activeUsers.keys()));
    });

    // Handle disconnection
    socket.on("disconnect", () => {
        for (const [userId, socketId] of activeUsers.entries()) {
            if (socketId === socket.id) {
                activeUsers.delete(userId);
                console.log(`User disconnected: ${userId}`);
                break;
            }
        }
        io.emit("active:users", Array.from(activeUsers.keys()));
    });
});

io.listen(3000); // Replace with your desired port
console.log("Socket server is running on port 3000");