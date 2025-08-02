import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import authRouter from './routes/authRoutes.js';

dotenv.config();
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
const app = express();
const port = process.env.PORT || 3000;
connectDB();

app.use(express.json());
app.use(cors({credentials: true}));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello Pratik!');
});
app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);

app.listen(port,()=> console.log(`Server is running on port ${port}`));