import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 150,
    nullable: false
  })
  curp: string;

  @Column({
    type: 'varchar',
    length: 150,
    nullable: false
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 150,
    nullable: false
  })
  lastname: string;
  
  @Column({
    type: 'varchar',
    length: 150,
    nullable: false
  })
  phone: string;

  @Column({
    type: 'varchar',
    length: 150,
    nullable: false
  })
  email: string;
  
}
