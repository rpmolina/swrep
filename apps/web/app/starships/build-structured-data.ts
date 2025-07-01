import { extractId } from "@/lib/extract-id";
import { Starship } from "@/types/types";

export const buildStructuredData = (starships: Starship[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Star Wars Starships",
    "description": "List of starships featured in the Star Wars universe, including name, model, and manufacturer.",
    itemListElement: starships.map((starship) => ({
      "@type": "ListItem",
      position: extractId(starship.url),
      item: {
        "@type": "Starship",
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        cost_in_credits: starship.cost_in_credits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargo_capacity: starship.cargo_capacity,
        consumables: starship.consumables,
        url: `/starships/${extractId(starship.url)}`,
      },
    })),
  };
};