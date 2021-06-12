import { User } from "./user.entity";
import { getRepository } from "typeorm";

class UserService{

    async getUser(req, res) {
        const userRepository = getRepository(User)
        const user = await userRepository.find()
        res.json(user)
    }

    async create(user: User, res): Promise<any> {
        const userRepository = getRepository(User)
        const newUser = await userRepository.save(user)
        console.log('Salvando user no banco de dados', newUser)
        res.json({res: "Usuario salvo com sucesso"})
    }
}

export default new UserService();
