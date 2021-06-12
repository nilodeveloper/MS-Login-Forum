import { createConnection } from "typeorm";
import { User } from '../user/user.entity'

createConnection({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "example",
    database: "postgres",
    migrations: ["./migrations/*.ts"],
    synchronize: true,
    entities: [User]
});