import express from 'express';
import * as yup from 'yup';

var idIsNumber = express();

idIsNumber.get('/tasks/:id', async (req, res, next) => {
    let schema = yup.object().shape({
        id: yup.number().required()
    });

    const valid = await schema.isValid({
            id: req.params.id
        })
        .then(valid => {
            return valid
        });
     
    if(valid){
        next()
    }else{
        res.status(400).send('Id da task deve ser do tipo number')
    }   
});

export default idIsNumber;
