import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tickets')
export class Ticket {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'int',
    nullable: false
  })
  turn_number: number;

  @Column({
    type: 'date',
    nullable: false
  })
  date: Date;

  @Column({
    type: 'varchar',
    length: 150,
    nullable: false
  })
  barcode: string;
}
