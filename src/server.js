import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import router from './routers/index.js';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';


export function setupServer() {
    const app = express();

    app.use(express.json());
    app.use(pino());
    app.use(cors());
    app.use(cookieParser());

    app.use(router);

    app.use(notFoundHandler);
    app.use(errorHandler);

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

};


