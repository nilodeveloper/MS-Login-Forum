import express from 'express';

var idIsCharacter = express();

idIsCharacter.use('/user/:id', function (req, res, next) {
    if(req.params.id == "B")
        res.send('O Character não pode ser B')
    else{
        next();
    }    
});

export default idIsCharacter;
