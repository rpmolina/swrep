import { Film, FilterConfig, Person, Planet, Species, Starship } from "@/types/types";

const getBaseUrl = () => {
  return process.env.BACKEND_API_BASE_URL;
};

const getEndpointUrl = (endpoint: string, fields?: string) => {
  const url = `${getBaseUrl()}${endpoint}`;
  if (fields) {
    return `${url}?fields=${fields}`;
  }
  return url;
};

type PeopleFetchResponse = {
  people: Person[];
  error?: string;
};

type PlanetFetchResponse = {
  planets: Planet[];
  error?: string;
};

type StarshipFetchResponse = {
  starships: Starship[];
  error?: string;
};

type FilmFetchResponse = {
  films: Film[];
  error?: string;
};

type SpeciesFetchResponse = {
  species: Species[];
  error?: string;
};

export async function fetchAll(resource: string, fields?: string) {
  try {
  const response = await fetch(getEndpointUrl(resource, fields), {
    // cache for 1 hour for better performance
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }

    return response.json() as Promise<any>;
  } catch (error) {
    console.error("Error fetching resource:", error);
    return { error: "Error fetching resource" };
  }
}

export async function fetchPlanets(fields?: string): Promise<PlanetFetchResponse> {
  const response = await fetchAll("/planets", fields);
  return {planets: response} as PlanetFetchResponse;
}

export async function fetchPeople(fields?: string): Promise<PeopleFetchResponse> {
  const response = await fetchAll("/people", fields);
  return {people: response} as PeopleFetchResponse;
}

export async function fetchStarships(fields?: string): Promise<StarshipFetchResponse> {
  const response = await fetchAll("/starships", fields);
  return {starships: response} as StarshipFetchResponse;
}

export async function fetchFilms(fields?: string): Promise<FilmFetchResponse> {
  const response = await fetchAll("/films", fields);
  return {films: response} as FilmFetchResponse;
}

export async function fetchSpecies(fields?: string): Promise<SpeciesFetchResponse> {
  const response = await fetchAll("/species", fields);
  return {species: response} as SpeciesFetchResponse;
}

export async function fetchPlanetsFilters(): Promise<FilterConfig> {
  const response = await fetchAll("/filters/planets");
  return response as FilterConfig;
}

export async function fetchPeopleFilters(): Promise<FilterConfig> {
  const response = await fetchAll("/filters/people");
  return response as FilterConfig;
}

export async function fetchStarshipsFilters(): Promise<FilterConfig> {
  const response = await fetchAll("/filters/starships");
  return response as FilterConfig;
}

export async function fetchFilmsFilters(): Promise<FilterConfig> {
  const response = await fetchAll("/filters/films");
  return response as FilterConfig;
}