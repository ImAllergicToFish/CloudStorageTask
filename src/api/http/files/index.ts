import express from 'express';
import { authMiddleWare } from '../../../middlewares/authMiddleWare';

export default (app: express.Application) => {
    app.post(
        '/files', 
        authMiddleWare,
        require('./createDirectory').default
    )
    app.get(
        '/files', 
        authMiddleWare,
        require('./fetchFiles').default
    )
    app.post(
        '/files/upload',
        authMiddleWare,
        require('./uploadFile').default
    )
};
