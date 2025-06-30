import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import { X, Filter, Search } from "lucide-react";
import { FilterConfig, PlanetFilters } from "@/types/types";
import FilterBadge from "./filter-badge";
import SelectFilter from "./select-filter";
import { SearchFilter } from "./search-filter";

type FiltersPanelProps<T> = {
  title: string;
  filters: T;
  filterConfig: FilterConfig;
  search: string;
  setSearch: (search: string) => void;
  onFilterChange: (filterType: string, value: string) => void;
  onClearFilters: () => void;
};

export function FiltersPanel<T extends Record<string, string>>({
  title,
  filters,
  search,
  setSearch,
  onFilterChange,
  onClearFilters,
  filterConfig,
}: FiltersPanelProps<T>) {
  const hasActiveFilters = Object.values({ ...filters, search }).some(
    (filter) => filter !== ""
  );

  const handleClearFilters = () => {
    setSearch("");
    onClearFilters();
  };

  return (
    <Card className="mb-8 bg-slate-800/30 border-slate-700 backdrop-blur-sm w-full max-w-none gap-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
            <Filter className="h-5 w-5 text-[#637278]" />
            {title}
          </CardTitle>
          {hasActiveFilters && (
            <Button variant="outline" size="sm" onClick={handleClearFilters}>
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <SearchFilter search={search} setSearch={setSearch} />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 w-full">
          {Object.entries(filterConfig).map(([key, value]) => (
            <div key={key} className="space-y-2 min-w-0 w-full">
              <label className="text-sm font-medium text-slate-300">
                {key}
              </label>
              {value.type === "string" && (
                <SelectFilter
                  value={filters[key as keyof PlanetFilters] || ""}
                  onSelectChange={(value) =>
                    onFilterChange(key as keyof PlanetFilters, value)
                  }
                  options={value.values}
                />
              )}
              {value.type === "range" && (
                <SelectFilter
                  value={filters[key as keyof PlanetFilters] || undefined}
                  onSelectChange={(value) =>
                    onFilterChange(key as keyof PlanetFilters, value)
                  }
                  options={value.values.map((item) => item.name)}
                />
              )}
            </div>
          ))}
        </div>

        {/* Active PlanetFilters Display */}

        {(hasActiveFilters || search !== "") && (
          <div className="mt-4 pt-4 border-t border-slate-700">
            <div className="flex flex-wrap gap-2">
              {search && search !== "" && (
                <FilterBadge
                  key="search"
                  label="Search"
                  value={search}
                  onRemoveFilter={() => setSearch("")}
                />
              )}
              {Object.entries(filters)
                .filter(([_, value]) => value !== "" && value !== "all")
                .map(([key, value]) => (
                  <FilterBadge
                    key={key}
                    label={key}
                    value={value}
                    onRemoveFilter={() => onFilterChange(key as string, "")}
                  />
                ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
