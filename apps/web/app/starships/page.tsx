import { Header } from "@/components/header";
import StarshipContentView from "./page.csr";
import { fetchStarships, fetchStarshipsFilters } from "@/services/services";

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
    </div>
  );
}
