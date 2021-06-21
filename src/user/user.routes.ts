import { Router } from 'express';
import UserController from './user.controller';

const usersRouter = Router();

usersRouter.get('/', UserController.index);

usersRouter.post('/create', UserController.create);

usersRouter.post('/login', UserController.login);

export default usersRouter;