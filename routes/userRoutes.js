import express from 'express';
import isAuth from '../middleware/isAuth.js';
import { getCurrentUser } from '../controller/userController.js';

let userRouter = express.Router();

userRouter.post('/getcurrentuser', isAuth, getCurrentUser);

export default userRouter;