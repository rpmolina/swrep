import { Header } from "@/components/header";
import { ErrorState } from "@/components/error-state";
import { EmptyState } from "@/components/empty-state";
import FilmsContentView from "./page.csr";
import { fetchFilms, fetchFilmsFilters } from "@/services/services";

export default async function FilmsPage() {
  const filmsResponse = await fetchFilms();
  const filtersResponse = await fetchFilmsFilters();

  const isError = filmsResponse.error;
  const isEmpty = filmsResponse.films.length === 0;
  const showContent = !isError && !isEmpty;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-[#637278] to-slate-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Header
          title="Star Wars Films"
          description="Explore the far, far away galaxy and discover the films of the Star Wars universe"
        />
        {isError && <ErrorState />}
        {isEmpty && <EmptyState />}

        {showContent && (
          <FilmsContentView
            initialResources={filmsResponse.films}
            filterConfig={filtersResponse}
          />
        )}
      </div>
    </div>
  );
}
