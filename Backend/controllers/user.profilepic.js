const multer = require('multer');
const path = require('path');
const fs = require('fs');
const profileModel = require('../models/user.profile.pic')

// Set up storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, '../uploads/profile-pics');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
    }
});

// File filter for image types
const fileFilter = (req, file, cb) => {
    const profileModel = /jpeg|jpg|png/;
    const extname = profileModel.test(path.extname(file.originalname).toLowerCase());
    const mimetype = profileModel.test(file.mimetype);

    if (extname && mimetype) {
        cb(null, true);
    } else {
        cb(new Error('Only images are allowed (jpeg, jpg, png)'));
    }
};

// Multer upload middleware
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 } // Limit file size to 2MB
}).single('profilePic');

// Controller to handle profile picture upload
const uploadProfilePic = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const filePath = `/uploads/profile-pics/${req.file.filename}`;
        // Here you can save the filePath to the user's profile in the database

        res.status(201).json({
            message: 'Profile picture uploaded successfully',
            filePath: filePath
        });
    });
};

module.exports = { uploadProfilePic };