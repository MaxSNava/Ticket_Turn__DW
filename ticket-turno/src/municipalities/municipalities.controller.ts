import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { MunicipalitiesService } from './municipalities.service';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';

@Controller('municipalities')
export class MunicipalitiesController {
  constructor(private readonly municipalitiesService: MunicipalitiesService) {}

  @Post()
  create(@Body() createMunicipalityDto: CreateMunicipalityDto) {
    return this.municipalitiesService.create(createMunicipalityDto);
  }

  @Get()
  findAll() {
    return this.municipalitiesService.findAll();
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateMunicipalityDto: UpdateMunicipalityDto) {
    return this.municipalitiesService.update(id, updateMunicipalityDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.municipalitiesService.remove(id);
  }
}
