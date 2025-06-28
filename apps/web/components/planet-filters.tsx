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
import { X, Filter } from "lucide-react";

interface Filters {
  climate: string;
  terrain: string;
  population: string;
  diameter: string;
}

interface PlanetFiltersProps {
  filters: Filters;
  onFilterChange: (filterType: keyof Filters, value: string) => void;
  onClearFilters: () => void;
}

export function PlanetFilters({
  filters,
  onFilterChange,
  onClearFilters,
}: PlanetFiltersProps) {
  const hasActiveFilters = Object.values(filters).some(
    (filter) => filter !== ""
  );

  return (
    <Card className="mb-8 bg-slate-800/30 border-slate-700 backdrop-blur-sm">
      <CardHeader className="pb-4">
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

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Climate Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">
              Climate
            </label>
            <Select
              value={filters.climate}
              onValueChange={(value) => onFilterChange("climate", value)}
            >
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-[#637278]">
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
          </div>

          {/* Terrain Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">
              Terrain
            </label>
            <Select
              value={filters.terrain}
              onValueChange={(value) => onFilterChange("terrain", value)}
            >
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-[#637278]">
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
          </div>

          {/* Population Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">
              Population
            </label>
            <Select
              value={filters.population}
              onValueChange={(value) => onFilterChange("population", value)}
            >
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-[#637278]">
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
          </div>

          {/* Diameter Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">
              Diameter
            </label>
            <Select
              value={filters.diameter}
              onValueChange={(value) => onFilterChange("diameter", value)}
            >
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-[#637278]">
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
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="mt-4 pt-4 border-t border-slate-700">
            <div className="flex flex-wrap gap-2">
              {filters.climate && filters.climate !== "all" && (
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1 bg-[#637278]/20 border-[#637278]/30 text-[#637278]"
                >
                  Climate: {filters.climate}
                  <X
                    className="h-3 w-3 cursor-pointer hover:text-white"
                    onClick={() => console.log("clear climate")}
                  />
                </Badge>
              )}
              {filters.terrain && filters.terrain !== "all" && (
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1 bg-[#637278]/20 border-[#637278]/30 text-[#637278]"
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
                  className="flex items-center gap-1 bg-[#637278]/20 border-[#637278]/30 text-[#637278]"
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
                  className="flex items-center gap-1 bg-[#637278]/20 border-[#637278]/30 text-[#637278]"
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
