import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
dotenv.config();
import cors from 'cors';
import userRouter from './routes/userRoutes.js';

let port= process.env.PORT || 3000;

let app = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/api/auth", authRoutes)
app.use("/api/user", userRouter)

app.listen(port, () => {
    console.log("hello from server");
    connectDb();
});