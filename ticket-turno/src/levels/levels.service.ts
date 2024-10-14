import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Level } from './entities/level.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LevelsService {

  constructor(
    @InjectRepository(Level)
    private readonly levelsRepository: Repository<Level>
  ) {}

  async create(createLevelDto: CreateLevelDto) {
    try {
      await this.levelsRepository.save(createLevelDto);
      return 'Created successfully';
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    return await this.levelsRepository.find();
  }

  async update(id: string, updateLevelDto: UpdateLevelDto) {
    try {
      const result = await this.levelsRepository.update(id, updateLevelDto);
      if (result.affected === 0)  throw new NotFoundException(`User with ID ${id} not found`);
      return 'Updated successfully';
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    await this.levelsRepository.delete(id);
    return `Deleted item with ID ${id}`;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    throw new InternalServerErrorException('Unexpected error, check the server logs');
  }
}
