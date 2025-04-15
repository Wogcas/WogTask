import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity({name: "users"})
export default class User {

    @ObjectIdColumn()
    _id: ObjectId;

    @Column({ type: "varchar", length: 50, unique: true, nullable: false })
    username: string;

    @Column({ type: "varchar", nullable: false })
    password: string;

    @Column({ type: "varchar", unique: true, nullable: false })
    email: string;

    constructor(username: string, password: string, email: string) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}