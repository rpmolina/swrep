import { extractId } from "@/lib/extract-id";
import { Person } from "@/types/types";

export const buildStructuredData = (people: Person[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Star Wars Characters",
    "description": "List of Characters featured in the Star Wars universe, including name, gender, and birth year.",
    itemListElement: people.map((person) => ({
      "@type": "ListItem",
      position: extractId(person.url),
      item: {
        "@type": "Characters",
        name: person.name,
        gender: person.gender,
        birth_year: person.birth_year,
        height: person.height,
        mass: person.mass,
        hair_color: person.hair_color,
        skin_color: person.skin_color,
        eye_color: person.eye_color,
        url: `/people/${extractId(person.url)}`,
      },
    })),
  };
};