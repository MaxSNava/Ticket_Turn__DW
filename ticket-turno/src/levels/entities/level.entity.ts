import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('niveles')
export class Level {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 150,
    nullable: false
  })
  name: string;
}
