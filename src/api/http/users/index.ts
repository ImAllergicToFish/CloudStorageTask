import express from 'express';
import { authMidlleware } from '../../../middlewares/authMidelleware';



export default (app: express.Application) => {
    app.get(
        '/auth/me',
        authMidlleware,
        require('./getMe').default
    );
    app.post(
        '/auth/sign-up',
        require('./singUp').default
    );
    app.post(
        '/auth/sign-in',
        require('./singIn').default
    );
}