import UserBusiness from './user.business';
import UserService from './user.service';
import UserValidator from './user.validator';

class UserController{

    index(req, res) {
        UserService.getUser(req, res);
    }

    async create(req, res){
        UserValidator.check(req.body, res);
        UserBusiness.create(req.body, res);
        UserService.create(req.body, res);
    }
}

export default new UserController();

