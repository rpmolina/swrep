import { Header } from "@/components/header";
import StarshipContentView from "./page.csr";
import { fetchStarships, fetchStarshipsFilters } from "@/services/services";
import { buildStructuredData } from "./build-structured-data";
import Script from "next/script";

export default async function StarshipsPage() {
  const starships = await fetchStarships();
  const filters = await fetchStarshipsFilters();

  return (
    <div>
      <Header
        title="Star Wars Starships"
        description="Explore the far, far away galaxy and discover the starships of the Star Wars universe"
      />
      <StarshipContentView
        initialResources={starships}
        filterConfig={filters}
      />
      <Script
        id="jsonld-starships"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildStructuredData(starships)),
        }}
      />
    </div>
  );
}

export const metadata = {
  title: "Starships | SWAPI Explorer",
  description:
    "Explore the Star Wars galaxy and discover detailed information about each starship, including name, model, and manufacturer.",
  keywords: ["star wars", "starships", "swapi", "galaxy"],
  openGraph: {
    title: "Star Wars Starships | SWAPI Explorer",
    description: "Explore and learn about starships in the Star Wars universe.",
  },
};
