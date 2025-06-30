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
  Rocket,
  Ruler,
  Users,
  Package,
  Clock,
  Zap,
  DollarSign,
  Factory,
  User,
  Film,
} from "lucide-react";
import { Starship } from "@/types/types";

type StarshipCardProps = {
  starship: Starship;
  index: number;
};

export function StarshipCard({ starship, index }: StarshipCardProps) {
  const formatNumber = (value: string) => {
    if (value === "unknown" || value === "n/a") return "Unknown";
    const num = Number.parseInt(value.replace(/,/g, ""));
    if (isNaN(num)) return value;
    return num.toLocaleString();
  };

  const formatCredits = (credits: string) => {
    if (credits === "unknown" || credits === "n/a") return "Unknown";
    const num = Number.parseInt(credits);
    if (isNaN(num)) return credits;

    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B credits`;
    } else if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M credits`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K credits`;
    }
    return `${num.toLocaleString()} credits`;
  };

  const formatLength = (length: string) => {
    if (length === "unknown" || length === "n/a") return "Unknown";
    const num = Number.parseFloat(length);
    if (isNaN(num)) return length;
    return `${num.toLocaleString()} m`;
  };

  const getClassColor = (starshipClass: string) => {
    const classColors: { [key: string]: string } = {
      starfighter: "bg-red-500",
      corvette: "bg-blue-500",
      "star destroyer": "bg-gray-600",
      "light freighter": "bg-green-500",
      "assault starfighter": "bg-orange-500",
      "landing craft": "bg-purple-500",
      "escort ship": "bg-cyan-500",
      "medium transport": "bg-teal-500",
      "armed government transport": "bg-indigo-500",
      "star dreadnought": "bg-red-700",
      "deep space mobile battlestation": "bg-black",
    };

    const lowerClass = starshipClass.toLowerCase();
    for (const [key, color] of Object.entries(classColors)) {
      if (lowerClass.includes(key)) {
        return color;
      }
    }
    return "bg-slate-500";
  };

  const formatSpeed = (speed: string) => {
    if (speed === "unknown" || speed === "n/a") return "N/A";
    return speed.includes("km") ? speed : `${speed} km/h`;
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 bg-slate-800/50 border-slate-700 hover:border-slate-600 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
            {starship.name}
          </CardTitle>
          <Badge variant="outline" className="text-xs">
            #{index + 1}
          </Badge>
        </div>
        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
          {starship.model}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Class */}
        <div className="flex items-center gap-2">
          <Rocket className="h-4 w-4 text-slate-400" />
          <span className="text-sm text-slate-300">Class:</span>
          <Badge
            className={`${getClassColor(starship.starship_class)} text-white text-xs`}
          >
            {starship.starship_class}
          </Badge>
        </div>

        {/* Manufacturer */}
        <div className="flex items-center gap-2">
          <Factory className="h-4 w-4 text-slate-400" />
          <span className="text-sm text-slate-300">Manufacturer:</span>
          <span className="text-sm text-white truncate">
            {starship.manufacturer.split(",")[0]}
          </span>
        </div>

        <Separator className="bg-slate-700" />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-slate-400">
              <Ruler className="h-3 w-3" />
              <span>Length</span>
            </div>
            <p className="text-white font-medium">
              {formatLength(starship.length)}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1 text-slate-400">
              <DollarSign className="h-3 w-3" />
              <span>Cost</span>
            </div>
            <p className="text-white font-medium">
              {formatCredits(starship.cost_in_credits)}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1 text-slate-400">
              <Users className="h-3 w-3" />
              <span>Crew</span>
            </div>
            <p className="text-white font-medium">
              {formatNumber(starship.crew)}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1 text-slate-400">
              <Zap className="h-3 w-3" />
              <span>Speed</span>
            </div>
            <p className="text-white font-medium">
              {formatSpeed(starship.MGLT)}
            </p>
          </div>
        </div>

        <Separator className="bg-slate-700" />

        {/* Technical specs */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="space-y-1">
            <div className="text-slate-400">Hyperdrive</div>
            <p className="text-white font-medium">
              Class {starship.hyperdrive_rating}
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-slate-400">MGLT</div>
            <p className="text-white font-medium">{starship.MGLT}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1 text-slate-400">
              <Package className="h-3 w-3" />
              <span>Cargo</span>
            </div>
            <p className="text-white font-medium">
              {formatNumber(starship.cargo_capacity)} kg
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1 text-slate-400">
              <Clock className="h-3 w-3" />
              <span>Consumables</span>
            </div>
            <p className="text-white font-medium">{starship.consumables}</p>
          </div>
        </div>

        <Separator className="bg-slate-700" />

        {/* Additional Info */}
        <div className="grid grid-cols-3 gap-2 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {starship.pilots.length} pilots
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {formatNumber(starship.passengers)} passengers
          </span>
          <span className="flex items-center gap-1">
            <Film className="h-3 w-3" />
            {starship.films.length} films
          </span>
        </div>

        {/* Hover indicator */}
        <div className="absolute bottom-2 right-2 opacity-0">
          <div className="w-2 h-2 bg-[#637278] rounded-full animate-pulse" />
        </div>
      </CardContent>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[#637278]/0" />
    </Card>
  );
}
