import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateParameterDto } from './dto/create-parameter.dto';
import { UpdateParameterDto } from './dto/update-parameter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Parameter } from './entities/parameter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParametersService {

  constructor(
    @InjectRepository(Parameter)
    private readonly parametersRepository: Repository<Parameter>
  ) {}

  async create(createParameterDto: CreateParameterDto) {
    try {
      await this.parametersRepository.save(createParameterDto);
      return 'Created successfully';
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    return await this.parametersRepository.find();
  }

  async update(id: string, updateParameterDto: UpdateParameterDto) {
    try {
      const result = await this.parametersRepository.update(id, updateParameterDto);
      if (result.affected === 0)  throw new NotFoundException(`User with ID ${id} not found`);
      return 'Updated successfully';
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    await this.parametersRepository.delete(id);
    return `Deleted item with ID ${id}`;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    throw new InternalServerErrorException('Unexpected error, check the server logs');
  }
}
