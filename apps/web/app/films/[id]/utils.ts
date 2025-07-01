import { Person, Planet, Starship } from "@/types/types";

export function getEpisodeRoman(episodeId: number) {
  const romanNumerals = [
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
  ];
  return romanNumerals[episodeId] || episodeId.toString();
}

export  function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export  function getCharacterNames(
  characterUrls: string[],
  people: Person[]
): string[] {
  return characterUrls
    .map((url) => people.find((person) => person.url === url)?.name)
    .filter((name) => name !== undefined);
}

export  function getPlanetNames(planetUrls: string[], planets: Planet[]): string[] {
  return planetUrls
    .map((url) => planets.find((planet) => planet.url === url)?.name)
    .filter((name) => name !== undefined);
}

export function getStarshipNames(
  starshipUrls: string[],
  starships: Starship[]
): string[] {
  return starshipUrls
    .map((url) => starships.find((starship) => starship.url === url)?.name)
    .filter((name) => name !== undefined);
    }