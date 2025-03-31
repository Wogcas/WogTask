import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import User from "./entities/User";
import { DB_HOST, DB_NAME, DB_PORT, DB_USERNAME, DB_PASSWORD } from "./utils/Config";

export const connection = new DataSource({
    type: "mysql",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [User],
    synchronize: true,
    logging: false
});

connection.initialize();