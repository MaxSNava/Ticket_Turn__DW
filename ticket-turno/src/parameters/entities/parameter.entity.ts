import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('parameters')
export class Parameter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 10 })
  dayOfWeek: string;

  @Column({ type: 'int' })
  maxTurns: number;
}
