const userModel = require('../models/user.login.model');
const userService = require('../services/user.login.service');
const { validationResult } = require('express-validator');


module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if( !errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const { mobilnumber, fullname, password, username } = req.body;
    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.creatUser({
        mobilnumber: mobilnumber,
        fullname: fullname, 
        password: hashedPassword,
        username: username
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
}

module.exports.loginUser = async (req, res, next) => {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username: username });
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = user.generateAuthToken();
    res.status(200).json({ token, user });
}
