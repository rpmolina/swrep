import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { PersonDto } from 'src/swapi/dto/person.dto';
import { PeopleService } from './people.service';

@ApiTags('people')
@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get()
  @ApiOkResponse({
    description: 'List of people from SWAPI',
    type: [PersonDto],
  })
  async findAll() {
    return this.peopleService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Details of a person by ID',
    type: PersonDto,
  })
  @ApiNotFoundResponse({ description: 'Planet not found' })
  async findOne(@Param('id') id: string) {
    return this.peopleService.findOne(id);
  }
}
