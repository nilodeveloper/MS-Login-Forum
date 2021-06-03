import express from 'express';
import UserRoute from '../user/user.routes'
import TaskRoute from '../task/task.routes'

const routes = express()

routes.get('/', (req, res)=>{res.send('Boilerplate Api 1.0v')})
routes.use('/user', UserRoute)
routes.use('/tasks', TaskRoute)

export default routes