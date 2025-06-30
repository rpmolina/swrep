export type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export type Person = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export type Starship = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export type Film = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export type Species = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export type FilterRange = {
  type: 'range';
  values: {
    name: string;
    range: [number, number];
  }[];
};

export type FilterString = {
  type: 'string';
  values: string[];
  strict?: boolean;
};

export type FilterConfig = Record<string, FilterRange | FilterString>;

export type PlanetFilters = {
  climate: string;
  terrain: string;
  population: string;
  diameter: string;
}

export type PeopleFilters = {
  gender: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
}

export type StarshipFilters = {
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
}

export type FilmFilters = {
  director: string;
  producer: string;
  release_date: string;
}

export type MinimalResource = {
  name: string;
  url: string;
}

export type Populations = "unknown" | "small" | "medium" | "large"
