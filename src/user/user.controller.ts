import express from 'express';
import UserBusiness from './user.business';
import UserService from './user.service';
import UserValidator from './user.validator';

class UserController{

    index(req, res) {
        UserService.getUser(req, res);
    }

    async create(req, res, next){
        try{
            UserValidator.create(req.body, res);
            UserBusiness.create(req.body, res);
            UserService.create(req.body, res);
        }catch(e){
            return res.status(400).json({error: e})
        }
    }
}

export default new UserController();

