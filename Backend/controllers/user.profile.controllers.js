const User = require("../models/user.login.model");
const Post = require("../models/post.models");

// Get user profile
// Upload profile image

exports.createUserProfile = async (req, res) => {
    try {
        const { userId, username, bio, profilePicture, website } = req.body;

        if (!userId || !username) {
            return res.status(400).json({ message: "userId and username are required" });
        }

        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.username = username;
        user.bio = bio || "";
        user.profilePicture = profilePicture || "";
        user.website = website || "";

        await user.save();

        res.status(201).json({
            message: "User profile created/updated successfully",
            user: {
                id: user._id,
                username: user.username,
                bio: user.bio,
                profilePicture: user.profilePicture,
                website: user.website
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create/update user profile", error: error.message });
    }
}

exports.uploadProfileImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.profileImage = req.file.path; // Assuming multer saves file path in req.file.path
        await user.save();
        res.status(200).json({ message: "Profile image uploaded successfully", profileImage: user.profileImage });
    } catch (error) {
        res.status(500).json({ message: "Failed to upload profile image", error: error.message });
    }
};

// Get user posts
exports.getUserPosts = async (req, res) => {
    try {
        const posts = await Post.find({ author: req.user.id }).sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch user posts", error: error.message });
    }
};