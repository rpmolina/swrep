import { Film, FilterConfig, Person, Planet, Species, Starship } from "@/types/types";
import { get } from "./fetchers";

export async function fetchPlanets(fields?: Record<string, string>) {
  return get<Planet[]>('/planets', fields);
}

export async function fetchPeople(fields?: Record<string, string>) {
  return get<Person[]>('/people', fields);
}

export async function fetchStarships(fields?: Record<string, string>) {
  return get<Starship[]>('/starships', fields);
}

export async function fetchFilms(fields?: Record<string, string>) {
  return get<Film[]>('/films', fields);
}

export async function fetchSpecies(fields?: Record<string, string>) {
  return get<Species[]>('/species', fields);
}

export async function fetchPlanetById(id: string) {
  return get<Planet>(`/planets/${id}`);
}

export async function fetchPersonById(id: string) {
  return get<Person>(`/people/${id}`);
}

export async function fetchStarshipById(id: string) {
  return get<Starship>(`/starships/${id}`);
}

export async function fetchFilmById(id: string) {
  return get<Film>(`/films/${id}`);
}

export async function fetchPlanetsFilters() {
  return get<FilterConfig>('/filters/planets');
}

export async function fetchPeopleFilters() {
  return get<FilterConfig>('/filters/people');
}

export async function fetchStarshipsFilters() {
  return get<FilterConfig>('/filters/starships');
}

export async function fetchFilmsFilters() {
  return get<FilterConfig>('/filters/films');
}