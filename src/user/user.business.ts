import message from './user.constants.json';
import UserServiceBusiness from './user.service.business';
class UserBusiness{

    async create(data){
        // const type = await UserServiceBusiness.getTypeOfUser(data.username, data.type);
        // if(type <= 0){
        //     throw message['user.typeNotRegistable']
        // }
    }

    async login(data){
        const type = await UserServiceBusiness.getTypeOfUser(data.username);
        if(type <= 0){
            throw message['user.typeNotLogin']
        }
    }
}

export default new UserBusiness();
