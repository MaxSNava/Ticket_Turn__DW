import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { User } from 'src/users/entities/user.entity';
import { Level } from 'src/levels/entities/level.entity';
import { Municipality } from 'src/municipalities/entities/municipality.entity';
import { Issue } from 'src/issues/entities/issue.entity';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService],
  imports: [
    TypeOrmModule.forFeature([
      Ticket,
      User,
      Level,
      Municipality,
      Issue
    ])
  ],
  exports: [TicketsService]
})
export class TicketsModule {}
