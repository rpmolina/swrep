import { FilterConfig, FilterRange, Filters, Planet, Populations } from "../types";


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

const filterByRange = (property: keyof Planet) =>(ranges: FilterRange) => (items: Planet[], value: string) => {
  const range = ranges.values.find((range) => range.name === value);
  if (!range) {
    return items;
  }

  const [min, max] = range.range;

  return items.filter((planet) => {
    const num = Number.parseInt(planet[property] as string);
    return !isNaN(num) && num >= min && num <= max;
  });
};



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

// const filterStrategies: Record<keyof Filters, Function> = {
//   search: filterBySearch,
//   climate: filterByClimate,
//   terrain: filterByTerrain,
//   population: filterByPopulation,
//   diameter: filterByDiameter,
// };

const filterStrategies = (filterConfig: FilterConfig) => {
  return Object.entries(filterConfig).reduce((acc, [key, value]) => {
    if (value.type === "string") {
      acc[key as keyof Filters] = filterByProperty(key as keyof Planet);
    } else if (value.type === "range") {
      acc[key as keyof Filters] = filterByRange(key as keyof Planet)(value);
    }
    return acc;
  }, {} as Record<keyof Filters, Function>);
};  


const filterPlanets = (filterConfig: FilterConfig, filters: Filters, items: Planet[]) => {  
  const appliedFilters = Object.entries(filters).filter(([_, value]) => Boolean(value));

  const strategies = filterStrategies(filterConfig);

  return appliedFilters.reduce((acc, [key, value]) => {
    return strategies[key as keyof Filters](acc, value);
  }, items);
};

export default filterPlanets;