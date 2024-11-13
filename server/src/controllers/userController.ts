import { Request, Response } from 'express';
import User from '../models/userModel';

// Controller function to create a new user
export const createUser = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const user = await User.create({ firstName, lastName, email, password });
        (req.session as any).user = user;
        res.status(201).send('User created and session started');
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Error creating user');
    }
}

// Controller function to get the current user from the session
export const getUser = async (req: Request, res: Response) => {
    if ((req.session as any).user) {
        res.send(`Welcome ${(req.session as any).user.firstName} ${(req.session as any).user.lastName}`);
    } else {
        res.status(401).send('Please log in first.');
    }
}

// Controller function to log out the current user
export const logout = async (req: Request, res: Response) => {
    req.session.destroy(() => {
        res.send('Logged out');
    });
};