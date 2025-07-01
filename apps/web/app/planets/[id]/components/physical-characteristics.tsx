import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";
import {
  Ruler,
  Thermometer,
  Mountain,
  RotateCcw,
  Calendar,
} from "lucide-react";
import { formatNumber, getClimateColor } from "../utils";
import { Planet } from "@/types/types";

export const PhysicalCharacteristics = ({ planet }: { planet: Planet }) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Ruler className="h-5 w-5 text-[#637278]" />
          Physical Characteristics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-slate-400 text-sm mb-1">Diameter</div>
            <div className="text-white font-medium">
              {formatNumber(planet.diameter)} km
            </div>
          </div>
          <div>
            <div className="text-slate-400 text-sm mb-1">Gravity</div>
            <div className="text-white font-medium">{planet.gravity}</div>
          </div>
          <div>
            <div className="text-slate-400 text-sm mb-1">Surface water</div>
            <div className="text-white font-medium">
              {planet.surface_water}%
            </div>
          </div>
          <div>
            <div className="text-slate-400 text-sm mb-1">Population</div>
            <div className="text-white font-medium">
              {formatNumber(planet.population)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
              <Mountain className="h-4 w-4" />
              Terrain
            </div>
            <div className="text-white font-medium capitalize">
              {planet.terrain}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
              <Thermometer className="h-4 w-4" />
              Climate
            </div>
            <div className="flex items-center gap-2">
              <Badge
                className={`${getClimateColor(planet.climate)} text-white`}
              >
                {planet.climate}
              </Badge>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
              <RotateCcw className="h-4 w-4" />
              Rotation period
            </div>
            <div className="text-white font-medium">
              {planet.rotation_period === "unknown"
                ? "Unknown"
                : `${planet.rotation_period} hours`}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
              <Calendar className="h-4 w-4" />
              Orbital period
            </div>
            <div className="text-white font-medium">
              {planet.orbital_period === "unknown"
                ? "Unknown"
                : `${planet.orbital_period} days`}
            </div>
          </div>
        </div>
        <Separator className="bg-slate-700" />

        <div className="bg-slate-700/50 rounded-lg p-4">
          <div className="text-slate-400 text-sm mb-2">Additional data</div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Created:</span>
              <span className="text-white">
                {new Date(planet.created).toLocaleDateString("en-US")}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Updated:</span>
              <span className="text-white">
                {new Date(planet.edited).toLocaleDateString("en-US")}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
