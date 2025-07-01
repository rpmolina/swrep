import { extractId } from "@/lib/extract-id";
import { Planet } from "@/types/types";

export const buildStructuredData = (planets: Planet[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Star Wars Planets",
    "description": "List of planets featured in the Star Wars universe, including climate, terrain, and population data.",
    itemListElement: planets.map((planet) => ({
      "@type": "ListItem",
      position: extractId(planet.url),
      item: {
        "@type": "Planet",
        name: planet.name,
        climate: planet.climate,
        terrain: planet.terrain,
        population: planet.population,
        rotation_period: planet.rotation_period,
        orbital_period: planet.orbital_period,
        diameter: planet.diameter,
        gravity: planet.gravity,
        surface_water: planet.surface_water,
        residents: planet.residents,
        url: `/planets/${extractId(planet.url)}`,
      },
    })),
  };
};