import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { ObjectID } from 'mongodb';
import { EVehicleStatus } from 'src/types';


@Entity('vehicles')
export class Vehicle {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    merk: string;

    @Column()
    model: string;

    @Column()
    status: EVehicleStatus;
}
