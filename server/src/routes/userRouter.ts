import { Router } from 'express';
import { createUser, verifyUser, getUser, updateUser, deleteUser, logout } from '../controllers/userController';


const userRouter = Router();

userRouter.post('/create', createUser);
userRouter.post('/verify', verifyUser);
userRouter.get('/get', getUser);
userRouter.get('/update', updateUser);
userRouter.get('/delete', deleteUser);
userRouter.get('/logout', logout);


export default userRouter;