"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import { Separator } from "@workspace/ui/components/separator";
import {
  Globe,
  Users,
  Ruler,
  Thermometer,
  Mountain,
  Droplets,
} from "lucide-react";

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
}

interface PlanetCardProps {
  planet: Planet;
  index: number;
}

export function PlanetCard({ planet, index }: PlanetCardProps) {
  const formatNumber = (value: string) => {
    if (value === "unknown") return "Desconocido";
    const num = Number.parseInt(value);
    if (isNaN(num)) return value;
    return num.toLocaleString();
  };

  const getClimateColor = (climate: string) => {
    const climateColors: { [key: string]: string } = {
      arid: "bg-orange-500",
      temperate: "bg-green-500",
      tropical: "bg-emerald-500",
      frozen: "bg-blue-500",
      murky: "bg-gray-500",
      windy: "bg-cyan-500",
      hot: "bg-red-500",
      humid: "bg-teal-500",
      polluted: "bg-purple-500",
      unknown: "bg-slate-500",
    };

    const lowerClimate = climate.toLowerCase();
    for (const [key, color] of Object.entries(climateColors)) {
      if (lowerClimate.includes(key)) {
        return color;
      }
    }
    return "bg-slate-500";
  };

  const getTerrainIcon = (terrain: string) => {
    if (terrain.includes("desert")) return <Mountain className="h-4 w-4" />;
    if (terrain.includes("ocean") || terrain.includes("water"))
      return <Droplets className="h-4 w-4" />;
    if (terrain.includes("mountain")) return <Mountain className="h-4 w-4" />;
    return <Globe className="h-4 w-4" />;
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 bg-slate-800/50 border-slate-700 hover:border-slate-600 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
            {planet.name}
          </CardTitle>
          <Badge variant="outline" className="text-xs">
            #{index + 1}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Climate */}
        <div className="flex items-center gap-2">
          <Thermometer className="h-4 w-4 text-slate-400" />
          <span className="text-sm text-slate-300">Clima:</span>
          <Badge
            className={`${getClimateColor(planet.climate)} text-white text-xs`}
          >
            {planet.climate}
          </Badge>
        </div>

        {/* Terrain */}
        <div className="flex items-center gap-2">
          {getTerrainIcon(planet.terrain)}
          <span className="text-sm text-slate-300">Terrain:</span>
          <span className="text-sm text-white capitalize">
            {planet.terrain}
          </span>
        </div>

        <Separator className="bg-slate-700" />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-slate-400">
              <Ruler className="h-3 w-3" />
              <span>Diameter</span>
            </div>
            <p className="text-white font-medium">
              {formatNumber(planet.diameter)} km
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1 text-slate-400">
              <Users className="h-3 w-3" />
              <span>Population</span>
            </div>
            <p className="text-white font-medium">
              {formatNumber(planet.population)}
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-slate-400">Rotation</div>
            <p className="text-white font-medium">{planet.rotation_period}h</p>
          </div>

          <div className="space-y-1">
            <div className="text-slate-400">Orbit</div>
            <p className="text-white font-medium">{planet.orbital_period}d</p>
          </div>
        </div>

        <Separator className="bg-slate-700" />

        {/* Additional Info */}
        <div className="flex justify-between text-xs text-slate-400">
          <span>{planet.residents.length} residents</span>
          <span>{planet.films.length} films</span>
        </div>
      </CardContent>
    </Card>
  );
}
