import UserService from './user.service';

class UserController{

    index(req, res) {
        UserService.getUser(req, res)
    }

    create(req, res){
        UserService.create(req.body, res)
    }
}

export default new UserController();

