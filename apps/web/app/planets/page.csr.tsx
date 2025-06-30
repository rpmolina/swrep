"use client";

import { useState, useEffect } from "react";
import { PlanetCard } from "@/components/planet-card";
import { Badge } from "@workspace/ui/components/badge";
import { PlanetFilters } from "@/components/planet-filters";
import filterPlanets from "./utils/filterStrategies";
import { Planet, Filters, FilterConfig } from "./types";

type PlanetContentProps = {
  initialPlanets: Planet[];
  filterConfig: FilterConfig;
};

export function PlanetContent({
  initialPlanets,
  filterConfig,
}: PlanetContentProps) {
  const [filteredPlanets, setFilteredPlanets] =
    useState<Planet[]>(initialPlanets);

  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<Filters>({
    climate: "",
    terrain: "",
    population: "",
    diameter: "",
  });

  useEffect(() => {
    const filteredPlanets = filterPlanets(
      filterConfig,
      filters,
      initialPlanets
    );
    const filteredSearch = filteredPlanets.filter((planet) => {
      const name = planet.name.toLowerCase();
      const searchLower = search.toLowerCase();
      return name.includes(searchLower);
    });
    setFilteredPlanets(filteredSearch);
  }, [initialPlanets, filterConfig, filters, search]);

  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    const newValue = value === "all" ? "" : value;

    setFilters((prev) => ({
      ...prev,
      [filterType]: newValue,
    }));
  };

  const clearFilters = () => {
    setFilters({
      climate: "",
      terrain: "",
      population: "",
      diameter: "",
    });
  };

  return (
    <>
      {/* Filters */}
      <PlanetFilters
        filterConfig={filterConfig}
        search={search}
        setSearch={setSearch}
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={clearFilters}
      />

      {/* Results count */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-sm">
            {filteredPlanets.length} of {initialPlanets.length} planets
          </Badge>
          {Object.values(filters).some((filter) => filter !== "") && (
            <Badge variant="outline" className="text-xs">
              Active filters
            </Badge>
          )}
        </div>
      </div>

      {/* Planets Grid */}
      {filteredPlanets.length === 0 ? (
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
      )}
    </>
  );
}
