import { Task } from "./task.entity";
import { getRepository } from "typeorm";

class TaskService{

    async index(req, res) {
        const taskRepository = getRepository(Task)
        const tasks = await taskRepository.find()
        console.log(tasks)
        res.json(tasks)
    }

    unique(taskId: Number): String {
        console.log('Retornando dados da task de id: ', taskId)
        return 'Dados sobre a task: ${taskId}'
    }

    async create(task: Task): Promise<String> {
        const taskRepository = getRepository(Task)
        const tasks = await taskRepository.save(task)
        console.log('Salvando a task no banco de dados', task)
        return 'Task salva!'
    }
}

export default new TaskService();
