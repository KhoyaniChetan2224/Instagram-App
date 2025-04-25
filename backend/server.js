const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/userLoginDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB Connected");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
