import { Injectable } from '@nestjs/common';
import { SwapiResourceEnum } from 'src/swapi/types';
import { SwapiService } from 'src/swapi/swapi.service';
import { PlanetDto } from 'src/swapi/dto/planet.dto';
import { pick } from 'src/utils/pick';

@Injectable()
export class PlanetsService {
  constructor(private readonly swapiService: SwapiService) {}

  async findAll(fields?: string): Promise<PlanetDto[]> {
    const planets = await this.swapiService.findAll(SwapiResourceEnum.PLANETS);

    if (fields) {
      const fieldsArray = fields.split(',') as (keyof PlanetDto)[];
      return planets.map((planet) => pick(planet, ...fieldsArray));
    }

    return planets;
  }

  async findOne(id: string): Promise<PlanetDto> {
    return this.swapiService.findOne(SwapiResourceEnum.PLANETS, id);
  }
}
