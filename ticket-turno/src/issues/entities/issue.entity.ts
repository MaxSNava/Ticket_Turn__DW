import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tramites')
export class Issue {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 150,
    nullable: false
  })
  name: string;
}
