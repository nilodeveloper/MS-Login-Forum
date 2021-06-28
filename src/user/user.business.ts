import message from './user.constants.json';
import UserServiceBusiness from './user.service.business';
class UserBusiness{

    async create(data){
        console.log('data create user', data)
    }

    async login(data){
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
