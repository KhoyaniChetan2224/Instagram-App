const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.login.controllers');
const profileControoler = require('../controllers/user.profile.controllers');

router.post('/UserSignup', [
    body('email').isEmail().withMessage('Please include a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('fullname').notEmpty().withMessage('Full Name is required'),
    body('username').notEmpty().withMessage('Username is required'),
], userController.registerUser);

router.post('/login', [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'),
], userController.loginUser);

router.post('/emailsingup', [
    body('month').notEmpty().withMessage('Month is required'),
    body('year').notEmpty().withMessage('Year is required'),
    body('day').notEmpty().withMessage('Day is required'),
], userController.birthDataVarification);

router.post('/robotsecurity', [
    body('chackbox').notEmpty().withMessage('Checkbox is required'),
], userController.robotSecurity);


router.get('/profile', [
    body('userId').notEmpty().withMessage('User ID is required'),
    body('username').notEmpty().withMessage('Username is required'),
    body('bio').optional().isString(),
    body('profilePicture').optional().isURL().withMessage('Profile picture must be a valid URL'),
    body('website').optional().isURL().withMessage('Website must be a valid URL'),
], profileControoler.createUserProfile);



module.exports = router;
