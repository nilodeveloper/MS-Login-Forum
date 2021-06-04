import { createConnection } from "typeorm";
import { Task } from '../task/task.entity'

createConnection({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "example",
    database: "postgres",
    migrations: ["./migrations/*.ts"],
    entities: [Task]
});