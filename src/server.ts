import express from 'express';
import routes from './app/app.routes';
import middlewares from './app/app.middleware';

const app = express()

app.use(express.json())

app.use(middlewares)
app.use(routes)

app.listen(3000, ()=>{console.log('Server is on in 3000')})
