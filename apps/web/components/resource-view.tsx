"use client";

import { useState, useEffect } from "react";
import { Badge } from "@workspace/ui/components/badge";
import { FiltersPanel } from "@/components/filters-panel/filters-panel";
import { FilterConfig } from "@/types/types";

type ResourceViewProps<T, F extends Record<string, string>> = {
  initialResources: T[];
  filterConfig: FilterConfig;
  initialFilters: F;
  searchByProp: string;
  filtersTitle: string;
  filterStrategy: (filterConfig: FilterConfig, filters: F, items: T[]) => T[];
  renderContent: (resources: T[]) => React.ReactNode;
};

const ResourceView = <T, F extends Record<string, string>>({
  initialResources,
  filterConfig,
  initialFilters,
  filterStrategy,
  searchByProp = "name",
  filtersTitle,
  renderContent,
}: ResourceViewProps<T, F>) => {
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<F>(initialFilters);
  const [filteredResources, setFilteredResources] =
    useState<T[]>(initialResources);

  useEffect(() => {
    const filteredResources = filterStrategy(
      filterConfig,
      filters,
      initialResources
    );
    const filteredSearch = filteredResources.filter((resource) => {
      const name = (resource[searchByProp as keyof T] as string).toLowerCase();
      const searchLower = search.toLowerCase();
      return name.includes(searchLower);
    });
    setFilteredResources(filteredSearch);
  }, [initialResources, filterConfig, filters, search]);

  const handleFilterChange = (
    filterType: keyof Record<string, string | number>,
    value: string
  ) => {
    const newValue = value === "all" ? "" : value;

    setFilters((prev) => ({
      ...prev,
      [filterType]: newValue,
    }));
  };

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <>
      {/* PlanetFilters */}
      <FiltersPanel<F>
        title={filtersTitle}
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
          <Badge variant="default" className="text-sm bg-white text-black">
            {filteredResources.length} of {initialResources.length} resources
          </Badge>
          {Object.values(filters).some((filter) => filter !== "") && (
            <Badge variant="outline" className="text-xs">
              Active filters
            </Badge>
          )}
        </div>
      </div>
      {renderContent(filteredResources)}
    </>
  );
};

export default ResourceView;
