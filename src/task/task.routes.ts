import { Router } from 'express';
import TaskController from './task.controller';

const taskRouter = Router();

taskRouter.get('/', TaskController.index);
taskRouter.post('/', TaskController.create);
taskRouter.get('/:id', TaskController.unique);

export default taskRouter;
