import { Injectable } from '@nestjs/common';
import { SwapiResourceEnum } from 'src/swapi/types';
import { SwapiService } from 'src/swapi/swapi.service';
import { StarshipDto } from 'src/swapi/dto/starship.dto';
import { pick } from 'src/utils/pick';

@Injectable()
export class StarshipsService {
  constructor(private readonly swapiService: SwapiService) {}

  async findAll(fields?: string): Promise<StarshipDto[]> {
    const starships = await this.swapiService.findAll(
      SwapiResourceEnum.STARSHIPS,
    );

    if (fields) {
      const fieldsArray = fields.split(',') as (keyof StarshipDto)[];
      return starships.map((starship) => pick(starship, ...fieldsArray));
    }

    return starships;
  }

  async findOne(id: string): Promise<StarshipDto> {
    return this.swapiService.findOne(SwapiResourceEnum.STARSHIPS, id);
  }
}
