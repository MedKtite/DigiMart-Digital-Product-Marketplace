import { Router } from 'express';
import { createUser, getUser, logout } from '../controllers/userController';


const userRouter = Router();

userRouter.post('/create', createUser);
userRouter.get('/get', getUser);
userRouter.get('/logout', logout);


export default userRouter;