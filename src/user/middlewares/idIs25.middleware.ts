import express from 'express';

var idIs25 = express();

idIs25.use('/user/:id', function (req, res, next) {
   next()
});

export default idIs25;
