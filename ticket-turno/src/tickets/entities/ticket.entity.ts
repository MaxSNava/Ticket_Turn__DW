import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Level } from '../../levels/entities/level.entity';
import { Municipality } from '../../municipalities/entities/municipality.entity';
import { Issue } from '../../issues/entities/issue.entity';

@Entity('tickets')
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int' })
  turnNumber: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'varchar', length: 255 })
  barcode: string;

  @ManyToOne(() => User, (user) => user.tickets)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Level, (level) => level.tickets)
  @JoinColumn({ name: 'level_id' })
  level: Level;

  @ManyToOne(() => Municipality, (municipality) => municipality.tickets)
  @JoinColumn({ name: 'municipality_id' })
  municipality: Municipality;

  @ManyToOne(() => Issue, (issue) => issue.tickets)
  @JoinColumn({ name: 'issue_id' })
  issue: Issue;
}
