import { Injectable } from '@nestjs/common';
import { SwapiResourceEnum } from 'src/swapi/types';
import { SwapiService } from 'src/swapi/swapi.service';
import { PlanetDto } from 'src/swapi/dto/planet.dto';

@Injectable()
export class PlanetsService {
  constructor(private readonly swapiService: SwapiService) {}

  async findAll() {
    return this.swapiService.findAll(SwapiResourceEnum.PLANETS);
  }

  async findOne(id: string): Promise<PlanetDto> {
    return this.swapiService.findOne(SwapiResourceEnum.PLANETS, id);
  }
}
