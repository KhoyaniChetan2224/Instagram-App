const express = require('express');
const { body, validationResult } = require('express-validator');
const UserSingup = require('../modelse/user.login.modelse'); // Assuming you have a User model
const bcrypt = require('bcrypt');
const { default: mongoose } = require('mongoose');

const router = express.Router();

// Route: POST /accounts/emailsignup
// Description: Register a new user
router.post(
    '/EmailSingup',
    [
        body('email', 'Please include a valid email').isEmail(),
        body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
        body('fullname', 'Please Enater a valid fullname').notEmpty(),
        body('username', 'Username is required').notEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(401).json({ errors: errors.array() });
        }

        const { email, password, fullname, username } = req.body;

        try {
            // Check if the user already exists
            let user = await UserSingup.findOne({ email });
            if (user) {
                return res.status(401).json({ msg: 'User already exists' });
            }

            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create a new user
            user = new UserSingup({
                email,
                password: hashedPassword,
                fullname,
                username,
            });

            await user.save();

            res.status(201).json({ msg: 'User registered successfully' });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = UserSingup;