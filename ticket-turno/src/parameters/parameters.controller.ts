import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ParametersService } from './parameters.service';
import { CreateParameterDto } from './dto/create-parameter.dto';
import { UpdateParameterDto } from './dto/update-parameter.dto';

@Controller('parameters')
export class ParametersController {
  constructor(private readonly parametersService: ParametersService) {}

  @Post()
  create(@Body() createParameterDto: CreateParameterDto) {
    return this.parametersService.create(createParameterDto);
  }

  @Get()
  findAll() {
    return this.parametersService.findAll();
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateParameterDto: UpdateParameterDto) {
    return this.parametersService.update(id, updateParameterDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.parametersService.remove(id);
  }
}
