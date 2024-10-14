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
      await this.issuesRepository.save(createIssueDto);
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
      const result = await this.issuesRepository.update(id, updateIssueDto);
      if (result.affected === 0)  throw new NotFoundException(`User with ID ${id} not found`);
      return 'Updated successfully';
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
