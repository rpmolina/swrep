import { Header } from "@/components/header";
import PeopleContentView from "./page.csr";
import {
  fetchPeople,
  fetchPeopleFilters,
  fetchPlanets,
  fetchSpecies,
} from "@/services/services";

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
    </div>
  );
}
