import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('boards')
export class Board {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userid: number;

    @Column({ nullable: false })
    title: string;

    @Column()
    content: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    updatedAt: Date;

}