import { Injectable } from '@nestjs/common';
import { SwapiResourceEnum } from 'src/swapi/types';
import { SwapiService } from 'src/swapi/swapi.service';
import { PersonDto } from 'src/swapi/dto/person.dto';
import { pick } from 'src/utils/pick';

@Injectable()
export class PeopleService {
  constructor(private readonly swapiService: SwapiService) {}

  async findAll(fields?: string): Promise<PersonDto[]> {
    const people = await this.swapiService.findAll(SwapiResourceEnum.PEOPLE);

    if (fields) {
      const fieldsArray = fields.split(',') as (keyof PersonDto)[];
      return people.map((person) => pick(person, ...fieldsArray));
    }

    return people;
  }

  async findOne(id: string): Promise<PersonDto> {
    return this.swapiService.findOne(SwapiResourceEnum.PEOPLE, id);
  }
}
