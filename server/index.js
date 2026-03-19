const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messageRoutes");
const socket = require("socket.io");
const app = express();
require("dotenv").config(); // Load environment variables from .env file

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/messages", messageRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/chat-app",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("DB Connection Successful");
})
.catch((err) => {
    console.error("DB Connection Error:", err.message);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ msg: "Something went wrong!", status: false });
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Server Started on Port ${process.env.PORT}`);
});

const io = socket(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();

io.on("connection", (chatSocket) => {
  global.chatSocket = chatSocket;
  chatSocket.on("add-user", (userId) => {
    onlineUsers.set(userId, chatSocket.id);
  });

  chatSocket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      chatSocket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});
