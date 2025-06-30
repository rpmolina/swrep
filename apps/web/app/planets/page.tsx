import { Header } from "@/components/header";
import { ErrorState } from "@/components/error-state";
import { EmptyState } from "@/components/empty-state";
import PlanetContentView from "./page.csr";
import { fetchPlanets, fetchPlanetsFilters } from "@/services/services";

export default async function PlanetsPage() {
  const planetsResponse = await fetchPlanets();
  const filtersResponse = await fetchPlanetsFilters();
  const isError = planetsResponse.error;
  const isEmpty = planetsResponse.planets.length === 0;
  const showContent = !isError && !isEmpty;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-[#637278] to-slate-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Header
          title="Star Wars Planets"
          description="Explore the far, far away galaxy and discover the worlds of the Star Wars universe"
        />
        {isError && <ErrorState />}
        {isEmpty && <EmptyState />}

        {showContent && (
          <PlanetContentView
            initialResources={planetsResponse.planets}
            filterConfig={filtersResponse}
          />
        )}
      </div>
    </div>
  );
}
