import { Injectable } from '@nestjs/common';
import { planetsFilters } from './filter-enums/planets';

@Injectable()
export class FiltersService {
  getPlanetsFilters() {
    return planetsFilters;
  }
}
