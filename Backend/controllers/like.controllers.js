const Post = require('../models/post.models'); // Assuming you have a Post model
const Like = require('../models/post.models'); // Assuming you have a User model

// Like a post
exports.likePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const userId = req.user.id; // Assuming user ID is available in req.user

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        if (post.likes.includes(userId)) {
            return res.status(400).json({ message: 'Post already liked' });
        }

        post.likes.push(userId);
        await post.save();

        res.status(200).json({ message: 'Post liked successfully', post });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Unlike a post
exports.unlikePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const userId = req.user.id;

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        if (!post.likes.includes(userId)) {
            return res.status(400).json({ message: 'Post not liked yet' });
        }

        post.likes = post.likes.filter((id) => id.toString() !== userId);
        await post.save();

        res.status(200).json({ message: 'Post unliked successfully', post });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Add a comment to a post
exports.addComment = async (req, res) => {
    try {
        const { postId } = req.params;
        const { text } = req.body;
        const userId = req.user.id;

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const comment = {
            user: userId,
            text,
            createdAt: new Date(),
        };

        post.comments.push(comment);
        await post.save();

        res.status(200).json({ message: 'Comment added successfully', post });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete a comment from a post
exports.deleteComment = async (req, res) => {
    try {
        const { postId, commentId } = req.params;
        const userId = req.user.id;

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const comment = post.comments.find(
            (comment) => comment.id === commentId && comment.user.toString() === userId
        );

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found or unauthorized' });
        }

        post.comments = post.comments.filter((comment) => comment.id !== commentId);
        await post.save();

        res.status(200).json({ message: 'Comment deleted successfully', post });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

