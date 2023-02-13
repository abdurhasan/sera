import { EAccountStatus } from 'src/types';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { ObjectID } from 'mongodb';



@Entity('accounts')
export class Account {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    vehicleId: ObjectID;

    @Column()
    status: EAccountStatus;

    @Column()
    amount: number;

    @Column()
    owner: ObjectID

    @Column()
    description: string;

}
