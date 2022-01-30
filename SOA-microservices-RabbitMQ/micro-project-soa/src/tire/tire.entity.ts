import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Tire {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    image: string;

    @Column()
    description: string;
}