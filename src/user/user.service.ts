import { User } from "./user.entity";
import { getRepository } from "typeorm";
import message from './user.constants.json';

class UserService{

    async getUser(req, res) {
        const userRepository = getRepository(User)
        const user = await userRepository.find()
        res.json(user)
    }

    async create(user: User, res): Promise<any> {
        const userRepository = getRepository(User)
        const newUser = await userRepository.save(user)
        res.status(201).json({
            res: message["user.createUser"],
            status: 201,
            user: newUser
        })
    }
}

export default new UserService();
