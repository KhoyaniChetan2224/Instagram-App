const User = require('../models/user.login.model');

// Follow a user
exports.followUser = async (req, res) => {
    try {
        const { userIdToFollow } = req.body;
        const currentUserId = req.user.id;

        if (userIdToFollow === currentUserId) {
            return res.status(401).json({ message: "You cannot follow yourself." });
        }

        const userToFollow = await User.findById(userIdToFollow);
        const currentUser = await User.findById(currentUserId);

        if (!userToFollow) {
            return res.status(404).json({ message: "User to follow not found." });
        }

        if (currentUser.following.includes(userIdToFollow)) {
            return res.status(401).json({ message: "You are already following this user." });
        }

        currentUser.following.push(userIdToFollow);
        userToFollow.followers.push(currentUserId);

        await currentUser.save();
        await userToFollow.save();

        res.status(200).json({ message: "User followed successfully." });
    } catch (error) {
        res.status(500).json({ message: "Server error.", error: error.message });
    }
};

// Unfollow a user
exports.unfollowUser = async (req, res) => {
    try {
        const { userIdToUnfollow } = req.body;
        const currentUserId = req.user.id;

        const userToUnfollow = await User.findById(userIdToUnfollow);
        const currentUser = await User.findById(currentUserId);

        if (!userToUnfollow) {
            return res.status(404).json({ message: "User to unfollow not found." });
        }

        if (!currentUser.following.includes(userIdToUnfollow)) {
            return res.status(401).json({ message: "You are not following this user." });
        }

        currentUser.following = currentUser.following.filter(
            (id) => id.toString() !== userIdToUnfollow
        );
        userToUnfollow.followers = userToUnfollow.followers.filter(
            (id) => id.toString() !== currentUserId
        );

        await currentUser.save();
        await userToUnfollow.save();

        res.status(200).json({ message: "User unfollowed successfully." });
    } catch (error) {
        res.status(500).json({ message: "Server error.", error: error.message });
    }
};

// Get followers of a user
exports.getFollowers = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findById(userId).populate('followers', 'username email');
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        res.status(200).json({ followers: user.followers });
    } catch (error) {
        res.status(500).json({ message: "Server error.", error: error.message });
    }
};

// Get following of a user
exports.getFollowing = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findById(userId).populate('following', 'username email');
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        res.status(200).json({ following: user.following });
    } catch (error) {
        res.status(500).json({ message: "Server error.", error: error.message });
    }
};