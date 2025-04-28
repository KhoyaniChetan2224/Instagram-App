import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/config.js";


const userSchema = new mongoose.Schema({
    mobilenumber:{
        type: String,
        required: [ true, "mobilenumber is required" ],
        unique: [ true, "mobilenumber already exists" ],
        trim: true,
        lowercase: true,
        minLength: [ 10, "mobilenumber must be at least 10 characters" ],
        maxLength: [ 10, "mobilenumber must be at most 10 characters" ],
    },
    password: {
        type: String,
        select: false,
    },
    fullname: {
        type: String,
        required: [ true, "fullname is required" ],
        unique: [ true, "fullname already exists" ],
        trim: true,
        lowercase: true,
        minLength: [ 3, "fullname must be at least 3 characters" ],
        maxLength: [ 15, "fullname must be at most 20 characters" ],
    },
    username: {
        type: String,
        required: [ true, "username is required" ],
        unique: [ true, "username already exists" ],
        trim: true,
        lowercase: true,
        minLength: [ 3, "username must be at least 3 characters" ],
        maxLength: [ 15, "username must be at most 20 characters" ],
    },
})




userSchema.statics.hashPassword = async function (password) {

    if (!password) {
        throw new Error("Password is required");
    }


    const salt = await bcrypt.genSalt(10);

    return bcrypt.hash(password, salt);
}

userSchema.methods.comparePassword = async function (password) {
    if (!password) {
        throw new Error("Password is required");
    }

    if (!this.password) {
        throw new Error("Password is required");
    }


    return bcrypt.compare(password, this.password);
}

userSchema.methods.generateToken = function () {
    const token = jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email,
        },
        config.JWT_SECRET,
        {
            expiresIn: config.JWT_EXPIRES_IN,
        });

    return token;
}

userSchema.statics.verifyToken = function (token) {
    if (!token) {
        throw new Error("Token is required");
    }


    return jwt.verify(token, config.JWT_SECRET);
}


const userModel = mongoose.model("user", userSchema);


export default userModel;