import express from 'express';
import UserBusiness from './user.business';
import UserService from './user.service';
import UserValidator from './user.validator';

class UserController{

    index(req, res) {
        UserService.getUser(req, res);
    }

    async create(req, res){
        try{
            UserValidator.create(req.body);
            UserBusiness.create(req.body);
            UserService.create(req.body, res);
        }catch(e){
            return res.status(400).json({error: e})
        }
    }

    async login(req, res){
        try{
            UserValidator.login(req.body);
            await UserBusiness.login(req.body, res);
            UserService.login(req.body, res);
        }catch(e){
            return res.status(400).json({error: e})
        }
    }
}

export default new UserController();

