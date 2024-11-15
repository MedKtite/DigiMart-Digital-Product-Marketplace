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

// Controller function to verify the user's account
export const verifyUser = async (req: Request, res: Response) => {
    const { email, verificationCode } = req.body;
    try {
        const user = await User.findOne({ where: { email, verificationCode } });
        if (user) {
            user.isVerified = true;
            user.verficationCode = null;
            await user.save();
            res.send('User verified');
        } else {
            res.status(404).send('Invalid verification code');
        }
    } catch (error) {
        console.error('Error verifying user:', error);
        res.status(500).send('Error verifying user');
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

//Controller function to update the current user
export const updateUser = async (req: Request, res: Response) => {
    if ((req.session as any).user) {
        const user = await User.findByPk((req.session as any).user.id);
        if (user) {
            const { firstName, lastName, email, password } = req.body;
            await user.update({ firstName, lastName, email, password });
            res.send('User updated');
        } else {
            res.status(404).send('User not found');
        }
    } else {
        res.status(401).send('Please log in first.');
    }
}


// Controller function to delete the current user
export const deleteUser = async (req: Request, res: Response) => {
    if ((req.session as any).user) {
        const user = await User.findByPk((req.session as any).user.id);
        if (user) {
            await user.destroy();
            res.send('User deleted');
        } else {
            res.status(404).send('User not found');
        }
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