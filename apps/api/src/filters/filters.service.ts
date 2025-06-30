import { Injectable } from '@nestjs/common';
import { planetsFilters } from './filter-definitions/planets';
import { peopleFilters } from './filter-definitions/people';
import { filmsFilters } from './filter-definitions/films';
import { starshipsFilters } from './filter-definitions/starships';

@Injectable()
export class FiltersService {
  getPlanetsFilters() {
    return planetsFilters;
  }

  getPeopleFilters() {
    return peopleFilters;
  }

  getStarshipsFilters() {
    return starshipsFilters;
  }

  getFilmsFilters() {
    return filmsFilters;
  }
}
