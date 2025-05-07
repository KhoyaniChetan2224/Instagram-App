const mongoose = require('mongoose');

const followerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    followedAt: {
        type: Date,
        default: Date.now,
    },
});

const Follower = mongoose.model('Follower', followerSchema);

module.exports = Follower;