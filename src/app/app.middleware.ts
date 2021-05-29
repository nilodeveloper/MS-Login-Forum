import express from 'express';
import userMiddlewares from '../user/middlewares/user.middlewares';
import taskMiddlewares from '../task/middlewares/task.middlewares';

const middleware = express()

middleware.use(
    userMiddlewares,
    taskMiddlewares
)

export default middleware;
