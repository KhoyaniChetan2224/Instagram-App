const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/userAccountController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);

// Route to login a user
router.post('/login', loginUser);

// Route to get user profile (protected)
router.get('/profile', protect, getUserProfile);

// Route to update user profile (protected)
router.put('/profile', protect, updateUserProfile);

module.exports = Router;