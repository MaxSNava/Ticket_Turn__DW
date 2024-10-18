import { Module } from '@nestjs/common';
import { IssuesService } from './issues.service';
import { IssuesController } from './issues.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Issue } from './entities/issue.entity';

@Module({
  controllers: [IssuesController],
  providers: [IssuesService],
  imports: [TypeOrmModule.forFeature([Issue])],
  exports: [IssuesService]
})
export class IssuesModule {}
