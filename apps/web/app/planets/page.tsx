import { Header } from "@/components/header";
import PlanetContentView from "./page.csr";
import { fetchPlanets, fetchPlanetsFilters } from "@/services/services";
import Script from "next/script";
import { buildStructuredData } from "./build-structured-data";

export default async function PlanetsPage() {
  const planets = await fetchPlanets();
  const filters = await fetchPlanetsFilters();

  return (
    <div>
      <Header
        title="Star Wars Planets"
        description="Explore the far, far away galaxy and discover the worlds of the Star Wars universe"
      />
      <PlanetContentView initialResources={planets} filterConfig={filters} />
      <Script
        id="jsonld-planets"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildStructuredData(planets)),
        }}
      />
    </div>
  );
}

export const metadata = {
  title: "Planets | SWAPI Explorer",
  description:
    "Explore the Star Wars galaxy and discover detailed information about each planet, including climate, terrain, and population.",
  keywords: [
    "star wars",
    "planets",
    "swapi",
    "galaxy",
    "climate",
    "terrain",
    "population",
  ],
  openGraph: {
    title: "Star Wars Planets | SWAPI Explorer",
    description: "Explore and learn about planets in the Star Wars universe.",
  },
};
