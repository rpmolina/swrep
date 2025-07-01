import { Header } from "@/components/header";
import FilmsContentView from "./page.csr";
import { fetchFilms, fetchFilmsFilters } from "@/services/services";

export default async function FilmsPage() {
  const films = await fetchFilms();
  const filters = await fetchFilmsFilters();

  return (
    <div>
      <Header
        title="Star Wars Films"
        description="Explore the far, far away galaxy and discover the films of the Star Wars universe"
      />
      <FilmsContentView initialResources={films} filterConfig={filters} />
    </div>
  );
}
