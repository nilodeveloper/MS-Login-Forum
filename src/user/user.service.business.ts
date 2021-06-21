import { User } from "./user.entity";
import { getRepository } from "typeorm";
import UserService from './user.service';

class UserServiceBusiness{

    async getTypeOfUser(username: string) {
        const exist = await UserService.userExist(username)
        if(exist){
            const userRepository = getRepository(User)
            const user = await userRepository.find({ where: { username: username } });
            return user[0].type;   
        }else{
            return false
        }
    }
}

export default new UserServiceBusiness();
