const User = require('../../models/user.uodate.profile.models');
// Update user profile controller
// Assumes authentication middleware sets req.user._id
exports.updateProfile = async (req, res) => {
    try {
        const userId = req.user._id;

        // Extract fields to update from request body
        const { name, bio, website, avatar } = req.body;

        // Build update object
        const updateFields = {};
        if (name) updateFields.name = name;
        if (bio) updateFields.bio = bio;
        if (website) updateFields.website = website;
        if (avatar) updateFields.avatar = avatar;

        // Update user in database
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: updateFields },
            { new: true, runValidators: true, select: '-password' }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found.' });
        }

        res.status(200).json({
            message: 'Profile updated successfully.',
            user: updatedUser,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
};