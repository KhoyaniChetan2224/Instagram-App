const { Server } = require("socket.io");

const io = new Server({
    cors: {
        origin: "http://localhost:3000", // Replace with your frontend URL
        methods: ["GET", "POST"],
    },
});

let onlineUsers = new Map();

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Add user to online users
    socket.on("addUser", (userId) => {
        onlineUsers.set(userId, socket.id);
        io.emit("getUsers", Array.from(onlineUsers.keys()));
    });

    // Send and receive messages
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        const receiverSocketId = onlineUsers.get(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("getMessage", {
                senderId,
                text,
            });
        }
    });

    // Handle user disconnect
    socket.on("disconnect", () => {
        console.log("A user disconnected:", socket.id);
        for (let [userId, socketId] of onlineUsers.entries()) {
            if (socketId === socket.id) {
                onlineUsers.delete(userId);
                break;
            }
        }
        io.emit("getUsers", Array.from(onlineUsers.keys()));
    });
});

io.listen(8900);
console.log("Socket.io server is running on port 8900");