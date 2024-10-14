import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('municipios')
export class Municipality {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 150,
    nullable: false
  })
  name: string;
}
