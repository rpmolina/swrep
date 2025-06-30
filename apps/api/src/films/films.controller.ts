import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { FilmDto } from 'src/swapi/dto/film.dto';
import { FilmsService } from './films.service';

@ApiTags('films')
@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  @ApiOkResponse({
    description: 'List of films from SWAPI',
    type: [FilmDto],
  })
  @ApiQuery({
    name: 'fields',
    required: false,
    description: 'return only the fields specified',
  })
  async findAll(@Query('fields') fields?: string) {
    return this.filmsService.findAll(fields);
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Details of a film by ID',
    type: FilmDto,
  })
  @ApiNotFoundResponse({ description: 'Film not found' })
  async findOne(@Param('id') id: string) {
    return this.filmsService.findOne(id);
  }
}
