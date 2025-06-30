"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";
import { X, Filter, Search } from "lucide-react";
import { FilterConfig, FilterRange, FilterString } from "@/app/planets/types";

interface Filters {
  climate: string;
  terrain: string;
  population: string;
  diameter: string;
}

interface PlanetFiltersProps {
  filters: Filters;
  filterConfig: FilterConfig;
  search: string;
  setSearch: (search: string) => void;
  onFilterChange: (filterType: keyof Filters, value: string) => void;
  onClearFilters: () => void;
}

export function PlanetFilters({
  filters,
  search,
  setSearch,
  onFilterChange,
  onClearFilters,
  filterConfig,
}: PlanetFiltersProps) {
  const hasActiveFilters = Object.values(filters).some(
    (filter) => filter !== ""
  );

  return (
    <Card className="mb-8 bg-slate-800/30 border-slate-700 backdrop-blur-sm w-full max-w-none">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
            <Filter className="h-5 w-5 text-[#637278]" />
            Filters
          </CardTitle>
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={onClearFilters}
              className="text-slate-300 border-slate-600 hover:bg-slate-700 bg-transparent hover:border-[#637278]"
            >
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="px-8 py-6">
        {/* Search Input */}
        <div className="mb-6">
          <label className="text-sm font-medium text-slate-300 mb-2 block">
            Search
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-[#637278] focus:ring-1 focus:ring-[#637278] focus:outline-none transition-colors duration-200"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors duration-200"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 w-full">
          {Object.entries(filterConfig).map(([key, value]) => (
            <div key={key} className="space-y-2 min-w-0 w-full">
              <label className="text-sm font-medium text-slate-300">
                {key}
              </label>
              {value.type === "string" && (
                <Select
                  value={filters[key as keyof Filters]}
                  onValueChange={(value) =>
                    onFilterChange(key as keyof Filters, value)
                  }
                >
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-[#637278] h-12 w-full px-4 mt-2">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    {value.values.map((item: string) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              {value.type === "range" && (
                <Select
                  value={filters[key as keyof Filters]}
                  onValueChange={(value) =>
                    onFilterChange(key as keyof Filters, value)
                  }
                >
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-[#637278] h-12 w-full px-4 mt-2">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    {value.values.map((item: FilterRange["values"][number]) => (
                      <SelectItem key={item.name} value={item.name}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          ))}

          {/* Climate Filter */}
          {/* <div className="space-y-2 min-w-0 w-full">
            <label className="text-sm font-medium text-slate-300">
              Climate
            </label>
            <Select
              value={filters.climate}
              onValueChange={(value) => onFilterChange("climate", value)}
            >
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-[#637278] h-12 w-full px-4 mt-2">
                <SelectValue placeholder="All climates" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600">
                <SelectItem value="all">All climates</SelectItem>
                <SelectItem value="arid">Arid</SelectItem>
                <SelectItem value="temperate">Temperate</SelectItem>
                <SelectItem value="tropical">Tropical</SelectItem>
                <SelectItem value="frozen">Frozen</SelectItem>
                <SelectItem value="murky">Murky</SelectItem>
                <SelectItem value="windy">Windy</SelectItem>
                <SelectItem value="hot">Hot</SelectItem>
                <SelectItem value="humid">Humid</SelectItem>
                <SelectItem value="polluted">Polluted</SelectItem>
                <SelectItem value="unknown">Unknown</SelectItem>
              </SelectContent>
            </Select>
          </div> */}

          {/* Terrain Filter */}
          {/* <div className="space-y-2 min-w-0 w-full">
            <label className="text-sm font-medium text-slate-300">
              Terrain
            </label>
            <Select
              value={filters.terrain}
              onValueChange={(value) => onFilterChange("terrain", value)}
            >
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-[#637278] h-12 w-full px-4  mt-2">
                <SelectValue placeholder="All terrains" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600">
                <SelectItem value="all">All terrains</SelectItem>
                <SelectItem value="desert">Desert</SelectItem>
                <SelectItem value="grasslands">Grasslands</SelectItem>
                <SelectItem value="mountains">Mountains</SelectItem>
                <SelectItem value="jungle">Jungle</SelectItem>
                <SelectItem value="rainforests">Rainforests</SelectItem>
                <SelectItem value="tundra">Tundra</SelectItem>
                <SelectItem value="ice caves">Ice caves</SelectItem>
                <SelectItem value="swamp">Swamp</SelectItem>
                <SelectItem value="gas giant">Gas giant</SelectItem>
                <SelectItem value="forests">Forests</SelectItem>
                <SelectItem value="lakes">Lakes</SelectItem>
                <SelectItem value="ocean">Ocean</SelectItem>
                <SelectItem value="cityscape">Cityscape</SelectItem>
              </SelectContent>
            </Select>
          </div> */}

          {/* Population Filter */}
          {/* <div className="space-y-2 min-w-0 w-full">
            <label className="text-sm font-medium text-slate-300">
              Population
            </label>
            <Select
              value={filters.population}
              onValueChange={(value) => onFilterChange("population", value)}
            >
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-[#637278] h-12 w-full px-4  mt-2">
                <SelectValue placeholder="All populations" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600">
                <SelectItem value="all">All populations</SelectItem>
                <SelectItem value="small">Small ({"<"} 1M)</SelectItem>
                <SelectItem value="medium">Medium (1M - 1B)</SelectItem>
                <SelectItem value="large">Large ({">"} 1B)</SelectItem>
                <SelectItem value="unknown">Unknown</SelectItem>
              </SelectContent>
            </Select>
          </div> */}

          {/* Diameter Filter */}
          {/* <div className="space-y-2 min-w-0 w-full">
            <label className="text-sm font-medium text-slate-300">
              Diameter
            </label>
            <Select
              value={filters.diameter}
              onValueChange={(value) => onFilterChange("diameter", value)}
            >
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-[#637278] h-12 w-full px-4  mt-2">
                <SelectValue placeholder="All sizes" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600">
                <SelectItem value="all">All sizes</SelectItem>
                <SelectItem value="small">Small ({"<"} 10,000 km)</SelectItem>
                <SelectItem value="medium">
                  Medium (10,000 - 15,000 km)
                </SelectItem>
                <SelectItem value="large">Large ({">"} 15,000 km)</SelectItem>
                <SelectItem value="unknown">Unknown</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="mt-4 pt-4 border-t border-slate-700">
            <div className="flex flex-wrap gap-2">
              {filters.search && filters.search !== "" && (
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1 bg-purple-200 border-purple-500/30 text-purple-900 hover:bg-purple-300 hover:text-purple-900 hover:border-purple-500"
                >
                  Search: {filters.search}
                </Badge>
              )}
              {filters.climate && filters.climate !== "all" && (
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1 bg-purple-200 border-purple-500/30 text-purple-900 hover:bg-purple-300 hover:text-purple-900 hover:border-purple-500"
                >
                  Climate: {filters.climate}
                  <X
                    className="h-3 w-3 cursor-pointer hover:text-white"
                    onClick={() => onFilterChange("climate", "")}
                  />
                </Badge>
              )}
              {filters.terrain && filters.terrain !== "all" && (
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1 bg-purple-200 border-purple-500/30 text-purple-900 hover:bg-purple-300 hover:text-purple-900 hover:border-purple-500"
                >
                  Terrain: {filters.terrain}
                  <X
                    className="h-3 w-3 cursor-pointer hover:text-white"
                    onClick={() => onFilterChange("terrain", "")}
                  />
                </Badge>
              )}
              {filters.population && filters.population !== "all" && (
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1 bg-purple-200 border-purple-500/30 text-purple-900 hover:bg-purple-300 hover:text-purple-900 hover:border-purple-500"
                >
                  Population: {filters.population}
                  <X
                    className="h-3 w-3 cursor-pointer hover:text-white"
                    onClick={() => onFilterChange("population", "")}
                  />
                </Badge>
              )}
              {filters.diameter && filters.diameter !== "all" && (
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1 bg-purple-200 border-purple-500/30 text-purple-900 hover:bg-purple-300 hover:text-purple-900 hover:border-purple-500"
                >
                  Diameter: {filters.diameter}
                  <X
                    className="h-3 w-3 cursor-pointer hover:text-white"
                    onClick={() => onFilterChange("diameter", "")}
                  />
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
