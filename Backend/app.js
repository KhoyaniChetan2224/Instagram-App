import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js';
import aiRoutes from './routes/ai.routes.js';
import postsRoutes from "./routes/posts.routes.js"
import cookieParser from 'cookie-parser';



const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users', userRoutes);
app.use('/ai', aiRoutes);
app.use('/posts', postsRoutes);

export default app;
app.use('/users', userRoutes); // User routes

module.exports = app; // Start the server
