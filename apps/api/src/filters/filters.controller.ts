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
}
