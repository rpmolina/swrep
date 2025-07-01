"use client";

import { FilterConfig, Starship } from "@/types/types";
import ResourceView from "@/components/resource-view";
import { filterStarships } from "@/lib/filterStrategies";
import { StarshipFilters } from "@/types/types";
import { StarshipCard } from "@/components/starship-card";
import Link from "next/link";
import { extractId } from "@/lib/extract-id";

type StarshipContentViewProps = {
  initialResources: Starship[];
  filterConfig: FilterConfig;
};

export default function StarshipContentView({
  initialResources,
  filterConfig,
}: StarshipContentViewProps) {
  return (
    <ResourceView<Starship, StarshipFilters>
      initialResources={initialResources}
      filterConfig={filterConfig}
      searchByProp="name"
      initialFilters={{
        model: "",
        manufacturer: "",
        cost_in_credits: "",
        length: "",
      }}
      filtersTitle="Starship filters"
      filterStrategy={filterStarships}
      renderContent={(filteredStarships) => {
        return filteredStarships.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">
              No starships found with the applied filters
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {filteredStarships.map((starship, index) => (
              <Link
                href={`/coming-soon?from=/starships/${extractId(starship.url)}`}
                key={starship.url}
                className="w-full"
              >
                <StarshipCard
                  key={starship.url}
                  starship={starship}
                  index={index}
                />
              </Link>
            ))}
          </div>
        );
      }}
    />
  );
}
