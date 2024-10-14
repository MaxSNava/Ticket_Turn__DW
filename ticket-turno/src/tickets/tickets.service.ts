import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketsService {

  constructor(
    @InjectRepository(Ticket)
    private readonly ticketsRepository: Repository<Ticket>
  ) {}

  async create(createTicketDto: CreateTicketDto) {
    try {
      await this.ticketsRepository.save(createTicketDto);
      return 'Created successfully';
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    return await this.ticketsRepository.find();
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {
    try {
      const result = await this.ticketsRepository.update(id, updateTicketDto);
      if (result.affected === 0)  throw new NotFoundException(`User with ID ${id} not found`);
      return 'Updated successfully';
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    await this.ticketsRepository.delete(id);
    return `Deleted item with ID ${id}`;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    throw new InternalServerErrorException('Unexpected error, check the server logs');
  }
}
