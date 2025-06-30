import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { SpeciesService } from './species.service';
import { SpeciesDto } from 'src/swapi/dto/species.dto';

@ApiTags('species')
@Controller('species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @Get()
  @ApiOkResponse({
    description: 'List of species from SWAPI',
    type: [SpeciesDto],
  })
  @ApiQuery({
    name: 'fields',
    required: false,
    description: 'return only the fields specified',
  })
  async findAll(@Query('fields') fields?: string) {
    return this.speciesService.findAll(fields);
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Details of a species by ID',
    type: SpeciesDto,
  })
  @ApiNotFoundResponse({ description: 'Species not found' })
  async findOne(@Param('id') id: string) {
    return this.speciesService.findOne(id);
  }
}
