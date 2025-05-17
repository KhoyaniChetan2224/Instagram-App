const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.login.routes');
const userProfilepic = require('./routes/user.profile.pic');
const postModel = require('./models/post.models');
const Post = require('./controllers/post.controllres')



connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));


app.get('/', (req, res)=>{
    res.send("back-insta app")
});
app.use('/users', userRoutes);
app.use('/profilpic', userProfilepic)
app.use('/postModel', postModel)
app.use('/post', Post)


module.exports = app;
