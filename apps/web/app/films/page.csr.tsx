"use client";

import { Film, FilmFilters, FilterConfig } from "@/types/types";
import ResourceView from "@/components/resource-view";
import { filterFilms } from "@/lib/filterStrategies";
import { FilmCard } from "@/components/film-card";

type PlanetContentViewProps = {
  initialResources: Film[];
  filterConfig: FilterConfig;
};

export default function FilmsContentView({
  initialResources,
  filterConfig,
}: PlanetContentViewProps) {
  return (
    <ResourceView<Film, FilmFilters>
      initialResources={initialResources}
      filterConfig={filterConfig}
      searchByProp="title"
      initialFilters={{
        director: "",
        producer: "",
        release_date: "",
      }}
      filtersTitle="Film filters"
      filterStrategy={filterFilms}
      renderContent={(filteredFilms) => {
        return filteredFilms.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">
              No films found with the applied filters
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {filteredFilms.map((film, index) => (
              <FilmCard key={film.url} film={film} index={index} />
            ))}
          </div>
        );
      }}
    />
  );
}
