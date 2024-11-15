import { Router } from 'express';
import { createUser, verifyUser, getUser, updateUser, deleteUser, logout } from '../controllers/userController';
import { isAuthenticated } from '../middleware/authMiddleware';


const userRouter = Router();

userRouter.post('/create', createUser);
userRouter.post('/verify', verifyUser);
userRouter.get('/get', isAuthenticated,  getUser);
userRouter.get('/update',isAuthenticated,  updateUser);
userRouter.get('/delete',isAuthenticated, deleteUser);
userRouter.get('/logout',isAuthenticated, logout);


export default userRouter;