import { Injectable } from '@nestjs/common';
import { SwapiResourceEnum } from 'src/swapi/types';
import { SwapiService } from 'src/swapi/swapi.service';
import { FilmDto } from 'src/swapi/dto/film.dto';
import { pick } from 'src/utils/pick';

@Injectable()
export class FilmsService {
  constructor(private readonly swapiService: SwapiService) {}

  async findAll(fields?: string): Promise<FilmDto[]> {
    const films = await this.swapiService.findAll(SwapiResourceEnum.FILMS);

    if (fields) {
      const fieldsArray = fields.split(',') as (keyof FilmDto)[];
      return films.map((film) => pick(film, ...fieldsArray));
    }

    return films;
  }

  async findOne(id: string): Promise<FilmDto> {
    return this.swapiService.findOne(SwapiResourceEnum.FILMS, id);
  }
}
