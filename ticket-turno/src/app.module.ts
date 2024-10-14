import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { LevelsModule } from './levels/levels.module';
import { MunicipalitiesModule } from './municipalities/municipalities.module';
import { IssuesModule } from './issues/issues.module';
import { TicketsModule } from './tickets/tickets.module';
import { ParametersModule } from './parameters/parameters.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'ticket',
      autoLoadEntities: true,
      synchronize: true
    }),
    UsersModule,
    LevelsModule,
    MunicipalitiesModule,
    IssuesModule,
    TicketsModule,
    ParametersModule
  ]
})
export class AppModule {}
