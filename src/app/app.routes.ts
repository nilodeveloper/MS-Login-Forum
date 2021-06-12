import express from 'express';
import UserRoute from '../user/user.routes'

const routes = express()

routes.get('/', (req, res)=>{res.send('Boilerplate Api 1.0v')})
routes.use('/user', UserRoute)

export default routes