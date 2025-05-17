const userModel = require('../models/user.login.model');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password, fullname, username } = req.body;

        if (!email || !password || !fullname || !username) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email is already registered" });
        }

        const hashedPassword = await userModel.hashPassword(password);
        const newUser = new userModel({
            email,
            password: hashedPassword,
            fullname,
            username,
        });

        await newUser.save();
        const token = newUser.generateAuthToken();

        res.status(201).json({ token, user: newUser });
    } catch (error) {
        if (error.code === 11000) {
            // Handle duplicate key error
            return res.status(400).json({ message: "Duplicate key error: Email or Username already exists" });
        }
        next(error);
    }
};

module.exports.loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Fetch the user and select password
        const user = await userModel.findOne({ username }).select('+password');
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = user.generateAuthToken();
        res.status(200).json({ token, user });
    } catch (error) {
        next(error);
    }
};

module.exports.birthDataVarification = async (req, res, next) => {
    try {
        const { month, day, year } = req.body;

        if (!month || !day || !year) {
            return res.status(404).json({ message: "All fields are required" });
        }

        // Validate the date
        const date = new Date(`${year}-${month}-${day}`);
        if (date.getFullYear() !== parseInt(year) || date.getMonth() + 1 !== parseInt(month) || date.getDate() !== parseInt(day)) {
            return res.status(401).json({ message: "Invalid date" });
        }

        res.status(201).json({ message: "Date is valid" });
    } catch (error) {
        next(error);
    }
};

module.exports.robotSecurity = async (req, res, next) => {
    try {
        const { chackbox } = req.body;

        if ( !chackbox) {
            return res.status(404).json({ message: "All fields are required" });
        }

        console.log("Checkbox value:", chackbox);

        res.status(201).json({ message: "Robot security passed" });
    } catch (error) {
        next(error);
    }
};

module.exports.createUserProfile = async (req, res, next) => {
    try {
        const { userId, username,  bio, profilePicture, website } = req.body;

        if (!userId || !username) {
            return res.status(400).json({ message: "User ID is required" });
        }

        // Find the user
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update profile fields
        if (bio !== undefined) user.bio = bio;
        if (profilePicture !== undefined) user.profilePicture = profilePicture;
        if (website !== undefined) user.website = website;

        await user.save();

        res.status(201).json({ message: "Profile created/updated successfully", user });
    } catch (error) {
        next(error);
    }
};
