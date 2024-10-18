import { Module } from '@nestjs/common';
import { ParametersService } from './parameters.service';
import { ParametersController } from './parameters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parameter } from './entities/parameter.entity';

@Module({
  controllers: [ParametersController],
  providers: [ParametersService],
  imports: [TypeOrmModule.forFeature([Parameter])],
  exports: [ParametersService]
})
export class ParametersModule {}
