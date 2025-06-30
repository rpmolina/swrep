import { FilterConfig, FilterRange, PlanetFilters, Planet, PeopleFilters, Person, Starship, StarshipFilters, FilmFilters, Film } from "@/types/types";

const filterString = (a: string, b: string, strict: boolean) => {
  if (strict) {
    return a.toLowerCase() === b.toLowerCase();
  }
  return a.toLowerCase().includes(b.toLowerCase());
};


const filterByProperty = (property: string, strict: boolean = false) => (items: Record<string, any>[], value: string) => {
  return items.filter(({ [property]: prop }) => {
    if (Array.isArray(prop)) {
      return prop.some((p) => filterString(p, value, strict));
    }
    return filterString(prop, value, strict);
  });
};

const filterByRange = (property: string, ranges: FilterRange) => (items: Record<string, any>[], value: string) => {
  const range = ranges.values.find((range) => range.name === value);
  if (!range) {
    return items;
  }

  const [min, max] = range.range;

  return items.filter((item) => {
    const num = Number.parseInt(item[property] as string);
    return !isNaN(num) && num >= min && num <= max;
  });
};

const filterStrategies = (filterConfig: FilterConfig) => {
  return Object.entries(filterConfig).reduce((acc, [key, value]) => {
    if (value.type === "string") {
      acc[key as string] = filterByProperty(key as string, value.strict);
    } else if (value.type === "range") {
      acc[key as string] = filterByRange(key as string, value);
    }
    return acc;
  }, {} as Record<string, Function>);
};  

export const filterResources = <T extends Record<string, any>, F extends Record<string, any>>(
  filterConfig: FilterConfig,
  filters: F,
  items: T[]
): T[] => {
  const appliedFilters = Object.entries(filters).filter(([_, value]) => Boolean(value));

  const strategies = filterStrategies(filterConfig);

  return appliedFilters.reduce((acc, [key, value]) => {
    return strategies[key] ? strategies[key](acc, value) : acc;
  }, items);
};

export const filterPlanets = (filterConfig: FilterConfig, filters: PlanetFilters, items: Planet[]) => 
  filterResources(filterConfig, filters, items);

export const filterPeople = (filterConfig: FilterConfig, filters: PeopleFilters, items: Person[]) => 
  filterResources(filterConfig, filters, items);

export const filterStarships = (filterConfig: FilterConfig, filters: StarshipFilters, items: Starship[]) => 
  filterResources(filterConfig, filters, items);

export const filterFilms = (filterConfig: FilterConfig, filters: FilmFilters, items: Film[]) => 
  filterResources(filterConfig, filters, items);