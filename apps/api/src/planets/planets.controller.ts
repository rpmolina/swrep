import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';
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
  async findAll() {
    return this.planetsService.findAll();
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
