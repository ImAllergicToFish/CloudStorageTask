import express from 'express';
import { check } from 'express-validator';
import AuthController from './authController';
import { authMidlleware } from '../../../middlewares/authMidelleware';



export default (app: express.Application) => {
    app.get(
        '/users',
        AuthController.getUsers
    );
    app.get(
        '/auth/me',
        authMidlleware,
        AuthController.getMe,
    );
    app.post(
        '/auth/sign-up',
        [
            check('login', 'Логин не может быть пустым').notEmpty(),
            check('email', 'Неверный email').normalizeEmail().isEmail(),
            check('email', 'Email не может быть пустым').notEmpty(),
            check('password', 'Пароль должен быть от 4 до 16 символов').isLength({ min: 4, max: 16 })
        ], 
        AuthController.create
    );
    app.post(
        '/auth/sign-in',
        AuthController.login
    );
}