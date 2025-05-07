const express = require('express');
const { createPost, getPosts, getPostById, updatePost, deletePost } = require('../controllers/postController');
const { protect } = require('../middlwares/authMiddleware');

const router = express.Router();

// Route to create a new post
router.post('/', protect, createPost);

// Route to get all posts
router.get('/', protect, getPosts);

// Route to get a single post by ID
router.get('/:id', protect, getPostById);

// Route to update a post by ID
router.put('/:id', protect, updatePost);

// Route to delete a post by ID
router.delete('/:id', protect, deletePost);

module.exports = router;