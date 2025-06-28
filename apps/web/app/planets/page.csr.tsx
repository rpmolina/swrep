"use client";

import { useState, useEffect } from "react";
import { PlanetCard } from "@/components/planet-card";
import { Badge } from "@workspace/ui/components/badge";
import { PlanetFilters } from "@/components/planet-filters";

interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

interface Filters {
  climate: string;
  terrain: string;
  population: string;
  diameter: string;
}

interface PlanetContentProps {
  initialPlanets: Planet[];
}

export function PlanetContent({ initialPlanets }: PlanetContentProps) {
  const [filteredPlanets, setFilteredPlanets] =
    useState<Planet[]>(initialPlanets);
  const [filters, setFilters] = useState<Filters>({
    climate: "",
    terrain: "",
    population: "",
    diameter: "",
  });

  useEffect(() => {
    applyFilters();
  }, [initialPlanets, filters]); // eslint-disable-line react-hooks/exhaustive-deps

  const applyFilters = () => {
    let filtered = initialPlanets;

    if (filters.climate) {
      filtered = filtered.filter((planet) =>
        planet.climate.toLowerCase().includes(filters.climate.toLowerCase())
      );
    }

    if (filters.terrain) {
      filtered = filtered.filter((planet) =>
        planet.terrain.toLowerCase().includes(filters.terrain.toLowerCase())
      );
    }

    if (filters.population) {
      filtered = filtered.filter((planet) => {
        if (filters.population === "unknown") {
          return planet.population === "unknown";
        }
        if (filters.population === "small") {
          const pop = Number.parseInt(planet.population);
          return !isNaN(pop) && pop < 1000000;
        }
        if (filters.population === "medium") {
          const pop = Number.parseInt(planet.population);
          return !isNaN(pop) && pop >= 1000000 && pop < 1000000000;
        }
        if (filters.population === "large") {
          const pop = Number.parseInt(planet.population);
          return !isNaN(pop) && pop >= 1000000000;
        }
        return true;
      });
    }

    if (filters.diameter) {
      filtered = filtered.filter((planet) => {
        if (filters.diameter === "unknown") {
          return planet.diameter === "unknown";
        }
        if (filters.diameter === "small") {
          const diam = Number.parseInt(planet.diameter);
          return !isNaN(diam) && diam < 10000;
        }
        if (filters.diameter === "medium") {
          const diam = Number.parseInt(planet.diameter);
          return !isNaN(diam) && diam >= 10000 && diam < 15000;
        }
        if (filters.diameter === "large") {
          const diam = Number.parseInt(planet.diameter);
          return !isNaN(diam) && diam >= 15000;
        }
        return true;
      });
    }

    setFilteredPlanets(filtered);
  };

  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlanets.map((planet, index) => (
            <PlanetCard key={planet.url} planet={planet} index={index} />
          ))}
        </div>
      )}
    </>
  );
}
