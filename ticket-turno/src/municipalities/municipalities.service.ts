import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Municipality } from './entities/municipality.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MunicipalitiesService {

  constructor(
    @InjectRepository(Municipality)
    private readonly municipalitiesRepository: Repository<Municipality>
  ) {}

  async create(createMunicipalityDto: CreateMunicipalityDto) {
    try {
      await this.municipalitiesRepository.save(createMunicipalityDto);
      return 'Created successfully';
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    return await this.municipalitiesRepository.find();
  }

  async update(id: string, updateMunicipalityDto: UpdateMunicipalityDto) {
    try {
      const result = await this.municipalitiesRepository.update(id, updateMunicipalityDto);
      if (result.affected === 0)  throw new NotFoundException(`User with ID ${id} not found`);
      return 'Updated successfully';
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    await this.municipalitiesRepository.delete(id);
    return `Deleted item with ID ${id}`;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    throw new InternalServerErrorException('Unexpected error, check the server logs');
  }
}
