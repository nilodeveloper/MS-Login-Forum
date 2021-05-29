import express from 'express';
import idIsNumber from './idIsNumber.middleware';
import createTask from './createTask.middleware';

const taskMiddlewares = express()

taskMiddlewares.use(
    idIsNumber,
    createTask
)

export default taskMiddlewares;
