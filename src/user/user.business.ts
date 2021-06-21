import message from './user.constants.json';
import UserServiceBusiness from './user.service.business';
class UserBusiness{

    async create(data){
        // const type = await UserServiceBusiness.getTypeOfUser(data.username, data.type);
        // if(type <= 0){
        //     throw message['user.typeNotRegistable']
        // }
    }

    async login(data, res){
        const type = await UserServiceBusiness.getTypeOfUser(data.username);
        if(type){
            if(type <= 0){
                throw message['user.typeNotLogin']
            }
        }else{
            throw 'usuario não cadastrado ou senha incorreta'
        }
    }
}

export default new UserBusiness();
