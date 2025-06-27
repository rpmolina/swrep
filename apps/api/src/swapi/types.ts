import { PlanetDto } from './dto/planet.dto';
import { PersonDto } from './dto/person.dto';
import { FilmDto } from './dto/film.dto';
import { SpecieDto } from './dto/specie.dto';
import { VehicleDto } from './dto/vehicle.dto';
import { StarshipDto } from './dto/starship.dto';

export enum SwapiResourceEnum {
  PLANETS = 'planets',
  PEOPLE = 'people',
  FILMS = 'films',
  SPECIES = 'species',
  VEHICLES = 'vehicles',
  STARSHIPS = 'starships',
}

export interface SwapiResourceMapDto {
  [SwapiResourceEnum.PLANETS]: PlanetDto;
  [SwapiResourceEnum.PEOPLE]: PersonDto;
  [SwapiResourceEnum.FILMS]: FilmDto;
  [SwapiResourceEnum.SPECIES]: SpecieDto;
  [SwapiResourceEnum.VEHICLES]: VehicleDto;
  [SwapiResourceEnum.STARSHIPS]: StarshipDto;
}
