import { Person, Film } from "@/types/types";

export function formatNumber(value: string): string {
  if (value === "unknown") return "Unknown";
  const num = Number.parseInt(value);
  if (isNaN(num)) return value;
  return num.toLocaleString();
}

export function getClimateColor(climate: string): string {
  const climateColors: { [key: string]: string } = {
    arid: "bg-orange-500",
    temperate: "bg-green-500",
    tropical: "bg-emerald-500",
    frozen: "bg-blue-500",
    murky: "bg-gray-500",
    windy: "bg-cyan-500",
    hot: "bg-red-500",
    humid: "bg-teal-500",
    polluted: "bg-purple-500",
    unknown: "bg-slate-500",
  };

  const lowerClimate = climate.toLowerCase();
  for (const [key, color] of Object.entries(climateColors)) {
    if (lowerClimate.includes(key)) {
      return color;
    }
  }
  return "bg-slate-500";
}

export function getResidentNames(residentUrls: string[], people: Person[]): string[] {
  return residentUrls
    .map((url) => {
      const person = people.find((person) => person.url === url);
      return person?.name || `Resident ${url.split("/").pop()}`;
    })
    .slice(0, 10);
}

export function getFilmTitles(filmUrls: string[], films: Film[]): string[] {
  return filmUrls
    .map((url) => {
      const film = films.find((film) => film.url === url);
      return film?.title || `Film ${url.split("/").pop()}`;
    })
    .slice(0, 10);
}

