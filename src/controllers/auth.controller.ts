import { Request, Response } from "express";
import User, { IUser } from "../models/User";
import jwt from "jsonwebtoken";

export const singup = async (req: Request, res: Response) => {
    // saving new user 
    const user: IUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    user.password = await user.encryptPassword(user.password);
    const savedUser = await user.save();

    // creating new token
    const token: string = jwt.sign({_id: savedUser._id}, process.env.TOKEN_SECRET || 'tokentest');
    res.header('auth-token',token).json(savedUser);
};

export const singin = async (req: Request, res: Response) => {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).json('El email es incorrecto');

    const correctPassword: boolean = await user.validatePassword(req.body.password);
    if (!correctPassword) return res.status(400).json('El password es incorrecto'); 

    const token: string = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET || 'tokentest', {
        expiresIn: 60*60*24
    });
    res.header('auth-token').json(user);

};

export const profile = (req: Request, res: Response) => {
    console.log(res.header('auth-token'));
    res.send('profile');
};