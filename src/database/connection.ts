import { createConnection } from "typeorm";
import { Task } from '../task/task.entity'

createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "abc123",
    database: "test",
    migrations: ["./migrations/*.ts"],
    entities: [Task]
});