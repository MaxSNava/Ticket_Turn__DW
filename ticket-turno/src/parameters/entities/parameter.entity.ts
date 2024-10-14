import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('parametros')
export class Parameter {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 150,
    nullable: false
  })
  dayWeek: string;

  @Column({
    type: 'int',
    nullable: false
  })
  maxTurns: number;
}
