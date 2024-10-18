import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Issue } from './entities/issue.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IssuesService {

  constructor(
    @InjectRepository(Issue)
    private readonly issuesRepository: Repository<Issue>
  ) {}

  async create(createIssueDto: CreateIssueDto) {
    try {
      const issue = this.issuesRepository.create(createIssueDto);
      await this.issuesRepository.save(issue);
      return 'Created successfully';
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    return await this.issuesRepository.find();
  }

  async update(id: string, updateIssueDto: UpdateIssueDto) {
    try {
      // Buscar y preparar la actualización
      const issue = await this.issuesRepository.preload({
        id,
        ...updateIssueDto,
      });
  
      // Si no se encuentra el registro, lanzar una excepción
      if (!issue) throw new NotFoundException(`Issue with ID ${id} not found`);
  
      // Guardar la entidad actualizada en la base de datos
      await this.issuesRepository.save(issue);
      return `Updated item with ID ${id}`;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    await this.issuesRepository.delete(id);
    return `Deleted item with ID ${id}`;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    throw new InternalServerErrorException('Unexpected error, check the server logs');
  }
}
