const User = require('../models/user.login.model'); // Import the User model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User Signup Controller
const userSignup = async (req, res) => {
    try {
        const { email, password, fullname, username } = req.body;

        // Check if all fields are provided
        if (!username || !email || !password || !fullname) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email, username, fullname, password });
        // const existingUser = await User.findOne({ email });
        // const existingUser = await
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            email,
            username,
            fullname,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        // Generate a JWT token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(201).json({
            message: 'User registered successfully',
            user: { id: newUser._id, username: newUser.username, email: newUser.email, fullname: newUser.fullname },
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { userSignup };