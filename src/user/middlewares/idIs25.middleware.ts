import express from 'express';

var idIs25 = express();

idIs25.use('/user/:id', function (req, res, next) {
    if(Number(req.params.id) == 25)
        next();
    else{
        res.send('O id tem que ser 25 (middleware de teste)')
    }    
});

export default idIs25;
