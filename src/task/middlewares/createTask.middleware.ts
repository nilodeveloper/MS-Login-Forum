import express from 'express';
import * as yup from 'yup';

var createTask = express();

createTask.post('/tasks', async (req, res, next) => {
    let schema = yup.object().shape({
        id: yup.number().required(),
        title: yup.string().required(),
        description: yup.string().required(),
        status: yup.boolean().required()
    });

    const valid = await schema.isValid({
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
        })
        .then(valid => {
            return valid
        });
     
     if(valid){
         next()
    }else{
        res.send('Dados inválidos para criar uma task')
    }   
});

export default createTask;
