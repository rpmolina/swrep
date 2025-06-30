"use client";

import { FilterConfig, Planet } from "@/types/types";
import ResourceView from "@/components/resource-view";
import { filterPlanets } from "@/lib/filterStrategies";
import { PlanetFilters } from "@/types/types";
import { PlanetCard } from "@/components/planet-card";

type PlanetContentViewProps = {
  initialResources: Planet[];
  filterConfig: FilterConfig;
};

export default function PlanetContentView({
  initialResources,
  filterConfig,
}: PlanetContentViewProps) {
  return (
    <ResourceView<Planet, PlanetFilters>
      initialResources={initialResources}
      filterConfig={filterConfig}
      searchByProp="name"
      initialFilters={{
        climate: "",
        terrain: "",
        population: "",
        diameter: "",
      }}
      filtersTitle="Planet filters"
      filterStrategy={filterPlanets}
      renderContent={(filteredPlanets) => {
        return filteredPlanets.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">
              No planets found with the applied filters
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {filteredPlanets.map((planet, index) => (
              <PlanetCard key={planet.url} planet={planet} index={index} />
            ))}
          </div>
        );
      }}
    />
  );
}
