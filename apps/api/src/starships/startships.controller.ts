import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { StarshipsService } from './startships.service';
import { StarshipDto } from 'src/swapi/dto/starship.dto';

@ApiTags('starships')
@Controller('starships')
export class StarshipsController {
  constructor(private readonly starshipsService: StarshipsService) {}

  @Get()
  @ApiOkResponse({
    description: 'List of starships from SWAPI',
    type: [StarshipDto],
  })
  @ApiQuery({
    name: 'fields',
    required: false,
    description: 'return only the fields specified',
  })
  async findAll(@Query('fields') fields?: string) {
    return this.starshipsService.findAll(fields);
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Details of a starship by ID',
    type: StarshipDto,
  })
  @ApiNotFoundResponse({ description: 'Starship not found' })
  async findOne(@Param('id') id: string) {
    return this.starshipsService.findOne(id);
  }
}
