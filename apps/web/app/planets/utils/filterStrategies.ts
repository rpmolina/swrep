import { Filters, Planet, Populations } from "../types";


const filterByProperty = (property: keyof Planet) => (items: Planet[], value: string) => {
  return items.filter(({ [property]: prop }) => {
    if (Array.isArray(prop)) {
      return prop.some((p) => p.toLowerCase().includes(value.toLowerCase()));
    }
    return prop.toLowerCase().includes(value.toLowerCase());
  });
};

const filterBySearch = filterByProperty("name");

const filterByClimate =  filterByProperty("climate");

const filterByTerrain = filterByProperty("terrain");

const filterByDiameter = filterByProperty("diameter");



const filterByPopulation = (items: Planet[], population: Populations) => {
  const scale: Record<Populations, [number, number]> = {
    unknown: [0,0],
    small: [0,1000000],
    medium: [1000000,1000000000],
    large: [1000000000,Infinity],
  };

  if (population === "unknown") {
    return items.filter((planet) => planet.population === "unknown");
  }

  const [min, max] = scale[population];

  return items.filter((planet) => {
    const pop = Number.parseInt(planet.population);
    return !isNaN(pop) && pop >= min && pop <= max;
  });
};

const filterStrategies: Record<keyof Filters, Function> = {
  search: filterBySearch,
  climate: filterByClimate,
  terrain: filterByTerrain,
  population: filterByPopulation,
  diameter: filterByDiameter,
};


const filterPlanets = (filters: Filters, items: Planet[]) => {  
  const appliedFilters = Object.entries(filters).filter(([_, value]) => Boolean(value));

  return appliedFilters.reduce((acc, [key, value]) => {
    return filterStrategies[key as keyof Filters](acc, value);
  }, items);
};

export default filterPlanets;