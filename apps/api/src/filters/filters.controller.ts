import { Controller, Get } from '@nestjs/common';
import { FiltersService } from './filters.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('filters')
export class FiltersController {
  constructor(private readonly filtersService: FiltersService) {}

  @Get('/planets')
  @ApiOperation({ summary: 'Get planets filters' })
  @ApiResponse({ status: 200, description: 'Planets filters' })
  getPlanetsFilters() {
    return this.filtersService.getPlanetsFilters();
  }

  @Get('/people')
  @ApiOperation({ summary: 'Get people filters' })
  @ApiResponse({ status: 200, description: 'People filters' })
  getPeopleFilters() {
    return this.filtersService.getPeopleFilters();
  }

  @Get('/starships')
  @ApiOperation({ summary: 'Get starships filters' })
  @ApiResponse({ status: 200, description: 'Starships filters' })
  getStarshipsFilters() {
    return this.filtersService.getStarshipsFilters();
  }

  @Get('/films')
  @ApiOperation({ summary: 'Get films filters' })
  @ApiResponse({ status: 200, description: 'Films filters' })
  getFilmsFilters() {
    return this.filtersService.getFilmsFilters();
  }
}
