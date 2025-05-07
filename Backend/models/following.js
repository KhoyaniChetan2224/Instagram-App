const mongoose = require('mongoose');

const { Schema } = mongoose;

const followingSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
}, { timestamps: true });

module.exports = mongoose.model('Following', followingSchema);