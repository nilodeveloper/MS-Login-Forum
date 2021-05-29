import TaskService from './task.service';

class TaskController{

    index(req, res) {
        TaskService.index(req, res)
    }

    unique(req, res){
        try{
            const taskId = req.params.id
            res.status(200).send(TaskService.unique(taskId))
        }catch{
            console.log("Não foi possível consultar a task")
            res.status(502).send("Não foi possível consultar a task")
        }
    }

    create(req, res) {
        try{
            const task = req.body
            res.status(201).send(TaskService.create(task))
        }catch{
            res.status(502).send("Não foi possível criar a task")
        }
    }
}

export default new TaskController();

