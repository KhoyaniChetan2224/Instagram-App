const Comment = require('../models/');
const Post = require('../models/post.models');

// Middleware to add a comment to a post
const addComment = async (req, res, next) => {
    try {
        const { postId, text } = req.body;
        const userId = req.user.id; // Assuming user ID is attached to req.user after authentication

        if (!text) {
            return res.status(400).json({ error: 'Comment text is required' });
        }

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        const comment = new Comment({
            text,
            user: userId,
            post: postId,
        });

        await comment.save();

        post.comments.push(comment._id);
        await post.save();

        res.status(201).json({ message: 'Comment added successfully', comment });
    } catch (error) {
        next(error);
    }
};

// Middleware to delete a comment
const deleteComment = async (req, res, next) => {
    try {
        const { commentId } = req.params;
        const userId = req.user.id; // Assuming user ID is attached to req.user after authentication

        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        if (comment.user.toString() !== userId) {
            return res.status(403).json({ error: 'Unauthorized to delete this comment' });
        }

        await Comment.findByIdAndDelete(commentId);

        // Remove the comment reference from the post
        await Post.findByIdAndUpdate(comment.post, { $pull: { comments: commentId } });

        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    addComment,
    deleteComment,
};