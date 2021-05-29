import { Router } from 'express';
import UserController from './user.controller';

const usersRouter = Router();

usersRouter.get('/', UserController.index);

usersRouter.get('/:id', UserController.unique);

export default usersRouter;