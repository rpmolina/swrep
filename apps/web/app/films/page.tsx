import { Header } from "@/components/header";
import FilmsContentView from "./page.csr";
import { fetchFilms, fetchFilmsFilters } from "@/services/services";
import Script from "next/script";
import { buildStructuredData } from "./build-structured-data";

export default async function FilmsPage() {
  const films = await fetchFilms();
  const filters = await fetchFilmsFilters();

  return (
    <div>
      <Header
        title="Star Wars Films"
        description="Explore the far, far away galaxy and discover the films of the Star Wars universe"
      />
      <FilmsContentView initialResources={films} filterConfig={filters} />
      <Script
        id="jsonld-films"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildStructuredData(films)),
        }}
      />
    </div>
  );
}

export const metadata = {
  title: " Films | SWAPI Explorer",
  description:
    "Explore the Star Wars galaxy and discover detailed information about each film, including title, director, and release date.",
  keywords: ["star wars", "films", "swapi", "galaxy"],
  openGraph: {
    title: "Star Wars Films | SWAPI Explorer",
    description: "Explore and learn about films in the Star Wars universe.",
  },
};
