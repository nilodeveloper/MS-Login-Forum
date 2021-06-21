import { User } from "./user.entity";
import { getRepository } from "typeorm";

class UserServiceBusiness{

    async getTypeOfUser(username: string) {
        const userRepository = getRepository(User)
        const user = await userRepository.find({ where: { username: username } });
        if(user)
            return user[0].type;
        else
            throw 'Usuário não cadastrado ou senha inválida'    
    }
}

export default new UserServiceBusiness();
