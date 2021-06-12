import express from 'express';

var idIsCharacter = express();

idIsCharacter.use('/user/:id', function (req, res, next) {
    next()
});

export default idIsCharacter;
