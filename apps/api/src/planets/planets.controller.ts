import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { PlanetsService } from './planets.service';
import { PlanetDto } from 'src/swapi/dto/planet.dto';

@ApiTags('planets')
@Controller('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Get()
  @ApiOkResponse({
    description: 'List of planets from SWAPI',
    type: [PlanetDto],
  })
  @ApiQuery({
    name: 'fields',
    required: false,
    description: 'return only the fields specified',
  })
  async findAll(@Query('fields') fields?: string) {
    return this.planetsService.findAll(fields);
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Details of a planet by ID',
    type: PlanetDto,
  })
  @ApiNotFoundResponse({ description: 'Planet not found' })
  async findOne(@Param('id') id: string) {
    return this.planetsService.findOne(id);
  }
}
