import { Header } from "@/components/header";
import PlanetContentView from "./page.csr";
import { fetchPlanets, fetchPlanetsFilters } from "@/services/services";

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
    </div>
  );
}
