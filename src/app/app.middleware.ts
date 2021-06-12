import express from 'express';
import userMiddlewares from '../user/middlewares/user.middlewares';

const middleware = express()

middleware.use(
    userMiddlewares
)

export default middleware;
