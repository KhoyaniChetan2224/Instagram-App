// routes/user.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const User = require("../models/user.login.model");
const userprofileController = require('../controllers/user.profilepic');

const router = express.Router();

// Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

// Upload route
router.post("/upload-profile", upload.single("profileImage"), async (req, res) => {
  try {
    const userId = req.user.id; // assuming user is authenticated
    const imagePath = `/uploads/${req.file.filename}`;

    // Update user profile image
    const user = await User.findByIdAndUpdate(userId, { profileImage: imagePath }, { new: true });

    res.json({ message: "Image uploaded", imagePath });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed" });
  }
},
  userprofileController.uploadProfilePic
);

module.exports = router;
