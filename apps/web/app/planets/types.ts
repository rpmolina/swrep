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
};

export type FilterConfig = Record<string, FilterRange | FilterString>;

export type Filters = {
  climate: string;
  terrain: string;
  population: string;
  diameter: string;
}

export type Populations = "unknown" | "small" | "medium" | "large"
