import { Header } from "@/components/header";
import { ErrorState } from "@/components/error-state";
import { EmptyState } from "@/components/empty-state";
import StarshipContentView from "./page.csr";
import { fetchStarships, fetchStarshipsFilters } from "@/services/services";

export default async function StarshipsPage() {
  const starshipsResponse = await fetchStarships();
  const filtersResponse = await fetchStarshipsFilters();

  const isError = starshipsResponse.error;
  const isEmpty = starshipsResponse.starships.length === 0;
  const showContent = !isError && !isEmpty;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-[#637278] to-slate-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Header
          title="Star Wars Starships"
          description="Explore the far, far away galaxy and discover the starships of the Star Wars universe"
        />
        {isError && <ErrorState />}
        {isEmpty && <EmptyState />}

        {showContent && (
          <StarshipContentView
            initialResources={starshipsResponse.starships}
            filterConfig={filtersResponse}
          />
        )}
      </div>
    </div>
  );
}
