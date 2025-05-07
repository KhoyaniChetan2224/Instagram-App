const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.login.controllers');


router.post('/UserSignup', [
    body('mobilnumber').isMobilePhone().withMessage('Mobil number must be at least 10 character long'),
    body('fullname').isLength({min: 3}).withMessage('Full name must be at least 3 character long'),
    body('password').isLength().withMessage('password must be at least 6 character long'),
    body('email').isEmail().withMessage('Invali Email')
], 
    userController.registerUser
)


module.exports = router;