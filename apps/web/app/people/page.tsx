import { Header } from "@/components/header";
import { ErrorState } from "@/components/error-state";
import { EmptyState } from "@/components/empty-state";
import PeopleContentView from "./page.csr";
import {
  fetchPeople,
  fetchPeopleFilters,
  fetchPlanets,
  fetchSpecies,
} from "@/services/services";

export default async function PlanetsPage() {
  const peopleResponse = await fetchPeople();
  const filtersResponse = await fetchPeopleFilters();
  const planetsResponse = await fetchPlanets("name,url");
  const speciesResponse = await fetchSpecies("name,url");

  const isError = peopleResponse.error;
  const isEmpty = peopleResponse.people.length === 0;
  const showContent = !isError && !isEmpty;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-[#637278] to-slate-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Header
          title="Star Wars People"
          description="Explore the far, far away galaxy and discover the people of the Star Wars universe"
        />
        {isError && <ErrorState />}
        {isEmpty && <EmptyState />}

        {showContent && (
          <PeopleContentView
            initialResources={peopleResponse.people}
            filterConfig={filtersResponse}
            planets={planetsResponse.planets}
            species={speciesResponse.species}
          />
        )}
      </div>
    </div>
  );
}
