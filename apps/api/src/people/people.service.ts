import { Injectable } from '@nestjs/common';
import { SwapiResourceEnum } from 'src/swapi/types';
import { SwapiService } from 'src/swapi/swapi.service';
import { PersonDto } from 'src/swapi/dto/person.dto';

@Injectable()
export class PeopleService {
  constructor(private readonly swapiService: SwapiService) {}

  async findAll() {
    return this.swapiService.findAll(SwapiResourceEnum.PEOPLE);
  }

  async findOne(id: string): Promise<PersonDto> {
    return this.swapiService.findOne(SwapiResourceEnum.PEOPLE, id);
  }
}
