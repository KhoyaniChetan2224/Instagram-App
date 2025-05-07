const mongoose = require('mongoose');

// Define the schema for followers
const followerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
}, { timestamps: true });

// Create the model
const Follower = mongoose.model('Follower', followerSchema);

// Function to follow a user
const followUser = async (userId, targetUserId) => {
    try {
        // Add targetUserId to the following list of userId
        await Follower.findOneAndUpdate(
            { userId },
            { $addToSet: { following: targetUserId } },
            { upsert: true, new: true }
        );

        // Add userId to the followers list of targetUserId
        await Follower.findOneAndUpdate(
            { userId: targetUserId },
            { $addToSet: { followers: userId } },
            { upsert: true, new: true }
        );

        return { success: true, message: 'User followed successfully' };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Error following user' };
    }
};

// Function to unfollow a user
const unfollowUser = async (userId, targetUserId) => {
    try {
        // Remove targetUserId from the following list of userId
        await Follower.findOneAndUpdate(
            { userId },
            { $pull: { following: targetUserId } }
        );

        // Remove userId from the followers list of targetUserId
        await Follower.findOneAndUpdate(
            { userId: targetUserId },
            { $pull: { followers: userId } }
        );

        return { success: true, message: 'User unfollowed successfully' };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Error unfollowing user' };
    }
};

// Export the model and functions
module.exports = {
    Follower,
    followUser,
    unfollowUser,
};