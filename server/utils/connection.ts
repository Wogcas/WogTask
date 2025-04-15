import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import User from "../user/user.entity";
import { DB_URL } from "./Config"; 

//export const connection = new DataSource({
    // type: "mongodb",
    // url: DB_URL,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // entities: [User],
    // synchronize: true,
    // logging: false
//});