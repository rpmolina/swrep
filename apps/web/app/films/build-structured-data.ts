import { extractId } from "@/lib/extract-id";
import { Film } from "@/types/types";

export const buildStructuredData = (films: Film[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Star Wars Films",
    "description": "List of films featured in the Star Wars universe, including title, director, and release date.",
    itemListElement: films.map((film) => ({
      "@type": "ListItem",
      position: extractId(film.url),
      item: {
        "@type": "Planet",
        title: film.title,
        director: film.director,
        release_date: film.release_date,
        opening_crawl: film.opening_crawl,
        
        url: `/films/${extractId(film.url)}`,
      },
    })),
  };
};