import { Task } from "./task.entity";
import { getRepository } from "typeorm";
import {createConnection} from "typeorm";

// createConnection method will automatically read connection options
// from your ormconfig file or environment variables


class TaskService{
    private connection = createConnection();

    index(req, res) {
        res.send(`Retornar todas as tasks`)
    }

    unique(taskId: Number): String {
        console.log('Retornando dados da task de id: ', taskId)
        return 'Dados sobre a task: ${taskId}'
    }

    create(task: Task): String {
        console.log('Salvando a task no banco de dados', task)
        return 'Task salva!'
    }

    delete(task: Task): String{ // Só pode deletar a task se ela estiver com status false (inativa)
        return ''
    }
}

export default new TaskService();
