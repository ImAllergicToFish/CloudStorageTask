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
    app.post(
        '/file/upload',
        require('./uploadFile').default
    )
    app.get(
        '/get-files',
        require('./getFiles').default
    )
    app.get(
        '/get-files/:id',
        require('./getFileById').default
    )
}