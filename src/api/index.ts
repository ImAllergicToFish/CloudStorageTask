import express from 'express';
import expressWs from 'express-ws';
import multer from 'multer';
import setupSwaggerUI from './http/swaggerDocumentation';
import cors from 'cors';
import { logMiddleware } from '../middlewares/logMiddleWare';
import bodyParser from 'body-parser';
import wsHandler from './ws';
import helmet from 'helmet';

const app = expressWs(express()).app;

app.use('/', express.static('client'));

//Use helmet
app.use(helmet());

//Use multer
app.use(multer({dest: 'uploads'}).single('filedata'));

//Enable CORS
app.use(cors({ origin: true }));

//------------------Middlewares-------------------

app.use(logMiddleware);

//------------------------------------------------

app.use(bodyParser.json());

setupSwaggerUI(app);

//--------------------WS api----------------------

app.ws('/api', wsHandler);

//-------------------HTTP api---------------------

const routes = express.Router();

require('./http/users').default(routes);

app.use('/api', routes);

//------------------------------------------------

export default app;
