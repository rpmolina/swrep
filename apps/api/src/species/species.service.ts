import { Injectable } from '@nestjs/common';
import { SwapiResourceEnum } from 'src/swapi/types';
import { SwapiService } from 'src/swapi/swapi.service';
import { pick } from 'src/utils/pick';
import { SpeciesDto } from 'src/swapi/dto/species.dto';

@Injectable()
export class SpeciesService {
  constructor(private readonly swapiService: SwapiService) {}

  async findAll(fields?: string): Promise<SpeciesDto[]> {
    const species = await this.swapiService.findAll(SwapiResourceEnum.SPECIES);

    if (fields) {
      const fieldsArray = fields.split(',') as (keyof SpeciesDto)[];
      return species.map((species) => pick(species, ...fieldsArray));
    }

    return species;
  }

  async findOne(id: string): Promise<SpeciesDto> {
    return this.swapiService.findOne(SwapiResourceEnum.SPECIES, id);
  }
}
