import { Header } from "@/components/header";
import PeopleContentView from "./page.csr";
import {
  fetchPeople,
  fetchPeopleFilters,
  fetchPlanets,
  fetchSpecies,
} from "@/services/services";
import { buildStructuredData } from "./build-structured-data";
import Script from "next/script";

export default async function PlanetsPage() {
  const people = await fetchPeople();
  const filters = await fetchPeopleFilters();
  const planets = await fetchPlanets({ fields: "name,url" });
  const species = await fetchSpecies({ fields: "name,url" });

  return (
    <div>
      <Header
        title="Star Wars People"
        description="Explore the far, far away galaxy and discover the people of the Star Wars universe"
      />
      <PeopleContentView
        initialResources={people}
        filterConfig={filters}
        planets={planets}
        species={species}
      />
      <Script
        id="jsonld-people"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildStructuredData(people)),
        }}
      />
    </div>
  );
}

export const metadata = {
  title: "Characters | SWAPI Explorer",
  description:
    "Explore the Star Wars galaxy and discover detailed information about each person, including name, gender, and birth year.",
  keywords: ["star wars", "people", "swapi", "galaxy"],
  openGraph: {
    title: "Star Wars Characters | SWAPI Explorer",
    description:
      "Explore and learn about characters in the Star Wars universe.",
  },
};
