const express = require('express');
const mongoose = require('mongoose');
const birthDataVarification = require('../controllers/user.login.controllers');

const router = express.Router();

// Define the User schema
const userSchema = new mongoose.Schema({
    birthDate: {
        month: { type: String, required: true },
        day: { type: Number, required: true },
        year: { type: Number, required: true },
    },
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Route to create a new user
router.post('/emailsingup', async (req, res) => {
    try {
        const { month, day, year } = req.body;

        // Validate input
        if (!month || !day || !year) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create a new user
        const newUser = new User({
           birthDate: { month, day, year },
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
});

module.exports = birthDataVarification;
//module.exports = router;